import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QA from './QA/QA';
import RR from './RR/RR';
import Overview from './Overview/Overview';
import Related from './Related/components/Related';
import Outfit from './Related/components/Outfit';
import Theme from './Theme';

const Nav = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors[0]};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  box-shadow: 0px 0px 8px 0px #00000036;
`;

const NavInner = styled.div`
  height: 50px;
  margin: auto;
  width: 1300px;
`

const Logo = styled.div`
  padding: 7px 0;
  height: 43px;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
`

const Cart = styled.div`
  padding: 10px 0;
  height: 40px;
  float: right;
  color: black;
  text-align: center;
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  margin: 50px auto auto auto;
  background-color:aliceblue;
  width: 1300px;
`

const OverviewLoading = styled.div`
  background-color: ${(props) => props.theme.colors[0]};
  height: 875px;
`;

function App({ getProduct, getStyles, getRelated, getReviews, getMeta, id }) {
  const [product, setProduct] = useState(getProduct);
  const [styles, setStyles] = useState(getStyles);
  const [related, setRelated] = useState(getRelated);
  const [reviews, setReviews] = useState(getReviews);
  const [meta, setMeta] = useState(getMeta);

  // data received state
  const [receivedProductInfo, setReceivedProductInfo] = useState(false);

  // overview state
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentSku, setCurrentSku] = useState('none');
  const [currentSize, setCurrentSize] = useState('Select Size');
  const [currentQty, setCurrentQty] = useState('-');
  const [currentTotal, setCurrentTotal] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const getProductInfo = (ID) => {
    const promises = [
      axios.get(`/products/${ID}`),
      axios.get(`/products/${ID}/styles`),
    ];
    return Promise.all(promises);
  };

  React.useEffect(() => {
    setCurrentSku('none');
    setCurrentSize('Select Size');
    setCurrentQty('-');
    setCurrentTotal(0);
  }, [currentStyle]);

  React.useEffect(() => {
    getProductInfo(id)
      .then((data) => {
        setProduct(data[0].data);
        setStyles(data[1].data);
        setCurrentStyle(data[1].data.results[0]);
        setReceivedProductInfo(true);
      });
  }, []);

  const handleClick = (e) => {
    if (e.target.id === 'whitespace') {
      if (expanded) {
        setExpanded(false);
      }
    }
  };

  const getReviewSort = (id, sort) => {
    axios.get(`/reviews?product_id=${id}&sort=${sort}`)
      .then((res) => {
        setReviews(res.data);
      });
  };

  const renderOverview = () => {
    if (receivedProductInfo) {
      return (
        <Overview
          receivedProductInfo={receivedProductInfo}
          product={product}
          styles={styles}
          meta={meta}
          currentStyle={currentStyle}
          currentSku={currentSku}
          currentSize={currentSize}
          currentQty={currentQty}
          currentTotal={currentTotal}
          setCurrentSize={setCurrentSize}
          setCurrentStyle={setCurrentStyle}
          setCurrentSku={setCurrentSku}
          setCurrentQty={setCurrentQty}
          setCurrentTotal={setCurrentTotal}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      );
    }
    return (<OverviewLoading>loading..</OverviewLoading>);
  };

  const renderQA = () => {
    if (receivedProductInfo) {
      return (
        <QA productId={product.id} productName={product.name} />
      );
    }
    return (<div>loading..</div>);
  };

  const renderRR = () => {
    if (receivedProductInfo) {
      return (
        <RR reviews={reviews} meta={meta} product={product} getReviewSort={getReviewSort} />
      );
    }
    return (<div>loading..</div>);
  };

  return (
    <Theme>
      <div id="whitespace" onClick={handleClick}>
        <Nav>
          <NavInner>
            <Cart>
              <img src="https://img.icons8.com/windows/32/000000/shopping-cart-promotion.png" alt="shopping cart" />
            </Cart>
            <Logo><img src="/assets/logo.png" height="37" alt="starkfront logo" /></Logo>
          </NavInner>
        </Nav>
        <Container>
          {renderOverview()}
          <Related relatedProducts={related} currentProduct={product} />
          <Outfit product={product} style={currentStyle} meta={meta} />
          {renderQA()}
          {renderRR()}
        </Container>
      </div>
    </Theme>
  );
}

export default App;