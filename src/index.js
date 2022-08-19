import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {SignupForm} from './examples/demo'
import {Basic} from './examples/basic'
import {AsyncSubmission} from './examples/asyncSubmission'
import {Checkboxes } from './examples/checkboxes'

function App() {
  const comps = ['SignupForm', 'Basic', 'Async Submission', 'Checkboxes']
  const [activeComp, setActiveComp] = React.useState(comps[0])

  return (
    <div>
      <div>{comps.map(comp => <button onClick={() => setActiveComp(comp)}>{comp}</button>)}</div>
      {activeComp === comps[0] && <SignupForm />}
      {activeComp === comps[1] && <Basic />}
      {activeComp === comps[2] && <AsyncSubmission />}
      {activeComp === comps[3] && <Checkboxes  />}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
