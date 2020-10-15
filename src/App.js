import React from 'react';

//third-party
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
//components

import Layout from './components/layout';
import store from './store/store';

//css
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout />
    </Router>
    </Provider>
  );
}

export default App;
