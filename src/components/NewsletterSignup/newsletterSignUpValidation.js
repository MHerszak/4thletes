import { createValidator, required, email } from 'utils/validation';

const newsletterSignUpValidation = createValidator({
  type: required,
  email: [required, email],
});
export default newsletterSignUpValidation;
