'use strict';

export default function sendEmailToAdmin(options = {}) { // always wrap in a function so you can pass options and for consistency.
  return hook => {

    if(!hook.app){
      throw new Error('The \'sendEmailToAdmin\' does not have an \'app\' object attached to it.');
    }

    if(!hook.data){
      throw new Error('The \'sendEmailToAdmin\' does not have a \'data\' object attached to it.');
    }

    if (hook.type !== 'after') {
      throw new Error('The \'sendEmailToAdmin\' hook should only be used as a \'after\' hook.');
    }

    console.log('call hook');

    const app = hook.app, data = hook.data;

    return new Promise((resolve, reject) => {
      const emailService = app.service('emails');

      if(!data.email){
        throw new Error('The \'data\' object does not have an \'email\' attached to it.');
        reject(hook);
      }

      // Use the service
      const emailData = {
        from: data.email,
        to: 'michel.herszak@gmail.com',
        subject: `${data.email} just signed up on Sponsors4Athletes`,
        html: `${data.email} just signed up on Sponsors4Athletes`,
      };

      console.log('made it till email service');

      emailService.create(emailData)
        .then(() => {
        console.log(`send email to ${data.email}`);
        resolve(hook);
        })
        .catch(error => {
          console.log(error.message);
          reject()
        });
    }); // A good convention is to always return a promise.
  };
}
