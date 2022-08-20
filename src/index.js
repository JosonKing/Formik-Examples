import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {SignupForm} from './examples/demo'
import {Basic} from './examples/basic'
import {AsyncSubmission} from './examples/asyncSubmission'
import {Checkboxes } from './examples/checkboxes'
import {Radio } from './examples/radio'
import {DependentFields } from './examples/dependentFields'
import {DependentFieldsWithAPI } from './examples/dependentFieldsWithAPI'
import {FieldArrays } from './examples/fieldArrays'
import {InstantFeedback } from './examples/instantFeedback'

function App() {
  const comps = [
    'SignupForm', 
    'Basic', 
    'Async Submission', 
    'Checkboxes', 
    'Radio',
    'Dependent Fields',
    'Dependent Fields With API',
    'Field Arrays',
    'Instant Feedback',
  ]
  const [activeComp, setActiveComp] = React.useState(comps[0])

  return (
    <div>
      <div>{comps.map(comp => <button onClick={() => setActiveComp(comp)}>{comp}</button>)}</div>
      {activeComp === comps[0] && <SignupForm />}
      {activeComp === comps[1] && <Basic />}
      {activeComp === comps[2] && <AsyncSubmission />}
      {activeComp === comps[3] && <Checkboxes />}
      {activeComp === comps[4] && <Radio />}
      {activeComp === comps[5] && <DependentFields />}
      {activeComp === comps[6] && <DependentFieldsWithAPI />}
      {activeComp === comps[7] && <FieldArrays />}
      {activeComp === comps[8] && <InstantFeedback />}

      <div className="footer">Additional examples in examples 
        <a href="https://github.com/jaredpalmer/formik/tree/master/examples">folder of the Formik GitHub repository</a>.
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
