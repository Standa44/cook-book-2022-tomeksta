import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

//------default setting -> was causing console error
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);*/

ReactDOM.render(<App />, document.getElementById('root'));

