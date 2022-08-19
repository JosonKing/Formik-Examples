import { Formik, Form, Field } from 'formik';

export const Basic = () => {
  return (
    <>
      <h1>Basic!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise(r => setTimeout(r, 100))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          <label htmlFor='firstName'>first name</label>
          <Field id='firstName' name='firstName' type='text' placeholder='Joson'></Field>
          
          <label htmlFor='lastName'>last name</label>
          <Field id='lastName' name='lastName' type='text' placeholder='King'></Field>
          
          <label htmlFor='email'>email</label>
          <Field id='email' name='email' type='email' placeholder='abc@de.com'></Field>

          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </>
  );
};