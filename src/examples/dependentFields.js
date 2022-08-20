import { Formik, Form, Field, useField, useFormikContext  } from 'formik';
import React from 'react';

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

const EmailField = (props) => {
  const {
    values: { firstName, lastName },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      touched.firstName &&
      touched.lastName
    ) {
      setFieldValue(props.name, `${firstName}.${lastName}@xxx.com`);
    }
  }, [lastName, firstName, touched.firstName, touched.lastName, setFieldValue, props.name]);

  return (
    <>
      <Field {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

export const DependentFields = () => {
  return (
    <>
      <h1>Dependent Fields!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await sleep(100)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({values, touched, setValues}) => {
          return (
            <Form>
  
              <div>
                <label htmlFor='firstName'>first name</label>
                <Field 
                  id='firstName' 
                  name='firstName' 
                  type='text' 
                  placeholder='Joson'
                />
              </div>
  
              <div>
                <label htmlFor='lastName'>last name</label>
                <Field 
                  id='lastName' 
                  name='lastName' 
                  type='text' 
                  placeholder='King'
                />
              </div>
  
              <div>
                <label htmlFor='email'>email</label>
                <EmailField  id='email' name='email' type='email' placeholder='abc@de.com' />
              </div>
  
              <button type='submit'>submit</button>
            </Form>
          )
        }}
        
      </Formik>
    </>
  );
};