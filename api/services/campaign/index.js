'use strict';

const service = require('feathers-mongoose');
const campaign = require('./campaign-model');
const hooks = require('./hooks/index');

module.exports = function() {
  const app = this;

  const options = {
    Model: campaign,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/campaigns', service(options));

  // Get our initialize service to that we can bind hooks
  const campaignService = app.service('/campaigns');

  // Set up our before hooks
  campaignService.before(hooks.before);

  // Set up our after hooks
  campaignService.after(hooks.after);
};
