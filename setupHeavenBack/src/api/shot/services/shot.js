'use strict';

/**
 * shot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shot.shot');
