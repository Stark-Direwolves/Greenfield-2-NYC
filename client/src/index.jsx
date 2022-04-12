import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const grabInfo = (id) => {
  const promises = [
    axios.get(`/products/${id}`),
    axios.get(`/products/${id}/styles`),
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
    let product = data[0].data;
    let styles = data[1].data;
    let related = data[2].data;
    let reviews = data[3].data;
    let meta = data[4].data;
    ReactDOM.render(<App
      getProduct={product}
      getStyles={styles}
      getRelated={related}
      getReviews={reviews}
      getMeta={meta}
    />, document.getElementById('App'));
  })
  .catch((err) => {
    console.log(err);
    ReactDOM.render(<div>Error please contact admin</div>, document.getElementById('App'));
  })
