import { Formik, Form, Field } from 'formik';

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

export const Checkboxes = () => {
  return (
    <>
      <h1>Checkboxes!</h1>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={async (values) => {
          await sleep(100)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({values}) => (
          <Form>
            <label style={{marginBottom: '20px'}}>
              <Field type='checkbox' name='toggle' /> checked: {values.toggle ? 'true' : 'false'}
            </label>

            <h5>checkbox group checked: {values.checked.join(', ')}</h5>
            <div>
              <label><Field type='checkbox' name='checked' value='one' />one</label>
              <label><Field type='checkbox' name='checked' value='two' />two</label>
              <label><Field type='checkbox' name='checked' value='three' />three</label>
            </div>
            

            <button type='submit'>submit</button>
          </Form>
        )}
        
      </Formik>
    </>
  );
};