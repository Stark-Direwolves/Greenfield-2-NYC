import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const grabInfo = (id) => {
  const promises = [
    axios.get(`/products/${id}/related`),
    axios.get(`/reviews?product_id=${id}&sort=relevant`),
    axios.get(`/reviews/meta?product_id=${id}`),
  ];
  return Promise.all(promises);
};

let id;

window.location.pathname.length > 1 ?
  id = window.location.pathname.replaceAll('/', '') :
  id = 65631;

grabInfo(id)
  .then((data) => {
    let related = data[0].data;
    let reviews = data[1].data;
    let meta = data[2].data;
    ReactDOM.render(<App
      getRelated={related}
      getReviews={reviews}
      getMeta={meta}
      id={id}
    />, document.getElementById('App'));
  })
  .catch((err) => {
    console.log(err);
    ReactDOM.render(<div>Error please contact admin</div>, document.getElementById('App'));
  })
