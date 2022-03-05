import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun';
import './index.css';
import App from './App';

registerMicroApps([
  {
    name: "qiankun-child",
    entry: "http://localhost:3001",
    container: "#child",
    activeRule: "/sub",
  },
]);
start();
const action = initGlobalState({ name: 'INITGUO'});
action.onGlobalStateChange((state, prev) => {
  console.log(state, prev, 19);
}, true);
action.setGlobalState({ name: 'guoba' });
action.offGlobalStateChange();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

