import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {
  Checkbox,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from 'redux-form-material-ui';

class MyForm extends React.Component<{} & InjectedFormProps, {}> {
  public render() {
    return (
      <form>
        <Field name="username" component={TextField} placeholder="Street" props={{type: 'password'}} />

        <Field name="plan" component={Select} placeholder="Select a plan">
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
          <MenuItem value="lifetime">Lifetime</MenuItem>
        </Field>

        <FormControlLabel control={<Field name="agreeToTerms" component={Checkbox} /> } label="Agree to terms?" />

        <FormControlLabel control={<Field name="receiveEmails" component={Switch} /> } label="Please spam me!" />

        <Field name="bestFramework" component={RadioGroup}>
          <FormControlLabel value="react" control={<Radio />} label="React" />
          <FormControlLabel value="angular" control={<Radio />} label="Angular" />
          <FormControlLabel value="ember" control={<Radio />} label="Ember" />
        </Field>
      </form>
    )
  }
}

// Decorate with redux-form
export default reduxForm({
  form: 'myForm'
})(MyForm);