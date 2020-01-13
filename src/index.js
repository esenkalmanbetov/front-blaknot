import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'


import './index.css';
import App from './containers/App';
import DbSubjectStore from './models/DbSubjectStore'

const store = DbSubjectStore.create({})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
