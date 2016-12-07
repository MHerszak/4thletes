import { restApp } from 'app';
import { SubmissionError } from 'redux-form';
const EMAIL_SEND = 'redux/email/EMAIL_SEND';

const campaignsService = restApp.service('campaigns');

const initialState = {};

const catchValidation = error => {
  if (error.message) {
    if (error.message === 'Validation failed' && error.data) {
      throw new SubmissionError(error.data);
    }
    throw new SubmissionError({ _error: error.message });
  }
  return Promise.reject(error);
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EMAIL_SEND:
      return {
        ...state,
        sendEmail: true
      };
    default:
      return state;
  }
}

export function sendEmail(data) {
  return {
    types: EMAIL_SEND,
    promise: () => campaignsService.create(data)
      .then(() => console.log('has been send'))
      .catch(catchValidation)
  };
}
