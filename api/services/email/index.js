'use strict';

import Mailer from 'feathers-mailer';
import transport from './transport';
import {sendgrid} from './options';

const mailer = Mailer(transport(sendgrid));

const hooks = require('./hooks/index');

export default function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/emails', mailer);

  console.log('email service is mounted');

  // Get our initialize service to that we can bind hooks
  const emailService = app.service('/emails');

  // Set up our before hooks
  emailService.before(hooks.before);

  // Set up our after hooks
  emailService.after(hooks.after);

};