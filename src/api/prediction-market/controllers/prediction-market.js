'use strict';

/**
 * prediction-market controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::prediction-market.prediction-market');
