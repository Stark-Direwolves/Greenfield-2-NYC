import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

let id;

window.location.pathname.length > 1 ?
  id = window.location.pathname.replaceAll('/', '') :
  id = 65631;

ReactDOM.render(<App
  id={id}
/>, document.getElementById('App'));
