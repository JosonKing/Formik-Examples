import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

export const FieldArrays = () => {
  return (
    <>
      <h1>FieldArrays!</h1>
      <Formik
        initialValues={{
          friends: [
            {
              name: '',
              email: '',
            }
          ],
        }}
        onSubmit={async (values) => {
          await sleep(100)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({values}) => (
          <Form>
            <FieldArray name='friends'>
              {({insert, remove, push}) => (
                <div>
                  {values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className='col'>
                        <label htmlFor={`friends.${index}.name`}>name</label>
                        <Field name={`friends.${index}.name`} placeholder="Joson" type="text" />
                        <ErrorMessage name={`friends.${index}.name`} component="div" className='friend-error' />
                      </div>

                      <div className='col'>
                        <label htmlFor={`friends.${index}.email`}>email</label>
                        <Field name={`friends.${index}.email`} placeholder="Joson.King@xxx.com" type="email" />
                        <ErrorMessage name={`friends.${index}.email`} component="div" className='friend-error' />
                      </div>

                      <div className='col'>
                        <button type='button' className='secondary' onClick={() => remove(index)}>X</button>
                      </div>
                    </div>

                  ))}
                  <button type='button' className='secondary'onClick={() => push({name: '', email: ''})} >Add Friend</button>
                </div>
              )}
            </FieldArray>

            <button type='submit'>invite</button>
          </Form>
        )}
        
      </Formik>
    </>
  );
};