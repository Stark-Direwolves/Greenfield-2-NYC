import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Container from '../styles/Container.styled';

const axios = require('axios');

function Related() {
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get('/products/65639/related')
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <h3>Related Products</h3>
      <Container>
        {products.map((product) => <Card key={product.id} product={product} />)}
      </Container>
    </div>
  );
}

export default Related;
