
module.exports = function (options, service = 'sendgrid') {
  return require(`nodemailer-${service}-transport`)(options);
};
