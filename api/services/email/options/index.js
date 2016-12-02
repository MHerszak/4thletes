import config from 'config';

export const sendgrid = {
  auth: {
    api_key: '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' || config.services.email.sendgrid.SENDGRID_API_KEY
  }
};