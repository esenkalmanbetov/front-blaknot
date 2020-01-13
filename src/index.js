import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import './index.css';
import App from './containers/App';
import DbSubjectStore from './models/DbSubjectStore'

const store = DbSubjectStore.create({})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
