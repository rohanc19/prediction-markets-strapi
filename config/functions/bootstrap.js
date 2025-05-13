'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
  // Set public permissions for prediction markets
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    const permissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({
        where: {
          role: publicRole.id,
          action: ['find', 'findOne', 'create'],
          subject: 'api::prediction-market.prediction-market',
        },
      });

    // If permissions don't exist, create them
    if (permissions.length === 0) {
      await strapi.query('plugin::users-permissions.permission').createMany({
        data: [
          {
            action: 'find',
            subject: 'api::prediction-market.prediction-market',
            role: publicRole.id,
            enabled: true,
          },
          {
            action: 'findOne',
            subject: 'api::prediction-market.prediction-market',
            role: publicRole.id,
            enabled: true,
          },
          {
            action: 'create',
            subject: 'api::prediction-market.prediction-market',
            role: publicRole.id,
            enabled: true,
          },
        ],
      });
    }
  }
};
