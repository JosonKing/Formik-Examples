import { Formik, Form, Field } from 'formik';

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

export const Radio = () => {
  return (
    <>
      <h1>Radio!</h1>
      <Formik
        initialValues={{
          picked: false,
        }}
        onSubmit={async (values) => {
          await sleep(100)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({values}) => (
          <Form>
            <h5>picked: {values.picked}</h5>
            <div>
              <label><Field type="radio" name="picked" value={'true'} />true</label>
              <label><Field type="radio" name="picked" value={'false'} />false</label>
            </div>
            

            <button type='submit'>submit</button>
          </Form>
        )}
        
      </Formik>
    </>
  );
};