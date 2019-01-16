import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import FormGroup from '../FormGroup';
import FormDebug from '../FormDebug';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.notFound} />
      <FormDebug {...props} />
    </Form>
  );
};

const DemoForm = createForm({
  view: InputFormView,
  FormGroup,
  controls: {
    login: {
      title: 'Login',
      component: Input,
    },
    password: {
      title: 'Password',
      component: Input,
      type: 'password',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('controlNotFound', () => {
      return (
        <Story>
          <DemoForm
            onSubmit={(values) => { console.log({ values }); }}
          />
        </Story>
      );
    });
