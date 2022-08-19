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
            <div style={{marginBottom: '20px'}}>
              <Field type='checkbox' name='toggle' /> checked: {values.toggle ? 'true' : 'false'}
            </div>

            <div>checkbox group checked: {values.checked.join(', ')}</div>
            <div>
              <Field type='checkbox' name='checked' value='one' /><span style={{marginRight: '12px'}}>one</span>
              <Field type='checkbox' name='checked' value='two' /><span style={{marginRight: '12px'}}>two</span>
              <Field type='checkbox' name='checked' value='three' /><span style={{marginRight: '12px'}}>three</span>
            </div>
            

            <button type='submit'>submit</button>
          </Form>
        )}
        
      </Formik>
    </>
  );
};