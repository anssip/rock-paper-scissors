import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// hot reloading is available
// @ts-ignore
module.hot.accept();
