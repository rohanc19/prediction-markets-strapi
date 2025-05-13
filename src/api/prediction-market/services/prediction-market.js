'use strict';

/**
 * prediction-market service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prediction-market.prediction-market');
