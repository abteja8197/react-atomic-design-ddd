import Form from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

const plugins = { dvr: dvr(validatorjs) };

const fields = [
  {
    name: 'email',
    label: 'User Email',
    type: 'email',
    rules: 'required|email|string|between:5,25',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    rules: 'required|string|between:5,25',
  },
];

const options = {
  validateOnChange: true,
  validateOnBlur: false,
  validateOnInit: false,
};

export default new Form({ fields }, { plugins, options });
