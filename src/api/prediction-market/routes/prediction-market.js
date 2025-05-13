'use strict';

/**
 * prediction-market router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::prediction-market.prediction-market');
