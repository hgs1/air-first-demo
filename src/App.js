import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SingleComponent from './singleComponent/index';
import DoubleComponent from './doubleComponent/index';
import { Input } from 'antd';

function App() {
  const [ initCount, setInitCount ] = React.useState('');
  return (
    <Router>
      <div>
        <h1>初始值设定</h1>
        <p class="init">
          初始值：
          <Input type="number" value={ initCount } onChange={ e => setInitCount(e.target.value) } />
        </p>
      </div>
      <div>
        <h1>例子选择</h1>
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
      </div>
      <Route path="/singleComponent" component={() => <SingleComponent initCount={ parseInt(initCount) || 0 }/>} />
      <Route path="/doubleComponent" component={() => <DoubleComponent initCount={ parseInt(initCount) || 0 }/>} />
    </Router>
  );
}

export default App;
