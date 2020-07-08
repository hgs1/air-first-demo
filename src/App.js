import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SingleComponent from './singleComponent/index';
import DoubleComponent from './doubleComponent/index';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/singleComponent">单组件版</Link>
          </li>
          <li>
            <Link to="/doubleComponent">双组件版</Link>
          </li>
          <li>
            <Link to="/users">redux版</Link>
          </li>
        </ul>
      </nav>
      <Route path="/singleComponent" component={SingleComponent} />
      <Route path="/doubleComponent" component={DoubleComponent} />
    </Router>
  );
}

export default App;
