import React from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import Button from './../Helper/Button';
import newsletterSignUpValidation from './newsletterSignUpValidation';
const option = ['Brand', 'Athlete'];

@reduxForm({
  form: 'NewsletterSignUp',
  validate: newsletterSignUpValidation
})
export default class NewsletterSignUp extends React.Component {

  static propTypes = {
    ...propTypes
  }

  renderOptionsSelector = ({ input, meta: { touched, error } }) => (
    <div className={`input-group input-group-lg ${error && touched ? 'has-error' : ''}`}>
      <select {...input} className="form-control">
        <option value="">I AM A...</option>
        {option.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {/*
      {touched && error && <span>{error}</span>}
      */}
    </div>
  )

  renderField({ meta: { touched, error }, input, ...rest }) {
    return (
      <div className={`input-group input-group-lg ${error && touched ? 'has-error' : ''}`}>
        <input {...input} {...rest} className="form-control" />
        <span className="input-group-btn">
          <Button type="submit" bsStyle="primary" name="submit">Submit</Button>
        </span>
        {/*
        {touched && error && <span className="error">{error}</span>}
        */}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    /*
    const styles = require('./NewsletterSignUpForm.scss');
    * */
    return (
      <form
        className="form-inline"
        onSubmit={handleSubmit}
      >
        <div>
          <Field name="type" component={this.renderOptionsSelector} />
          <Field name="email" placeholder="Email.." type="email" component={this.renderField} />
        </div>

      </form>
    );
  }
}
