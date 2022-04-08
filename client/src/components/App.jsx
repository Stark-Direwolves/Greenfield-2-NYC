import React, { useState } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from './Overview/Overview.jsx';
import Related from './Related/components/Related.jsx';
import Outfit from './Related/components/Outfit.jsx';
import Theme from './Theme.jsx';
import styled from 'styled-components';

const Nav = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.colors[0]};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1;
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

function App({ getProduct, getStyles, getRelated, getReviews, getMeta }) {
  const [product, setProduct] = useState(getProduct);
  const [styles, setStyles] = useState(getStyles);
  const [related, setRelated] = useState(getRelated);
  const [reviews, setReviews] = useState(getReviews);
  const [meta, setMeta] = useState(getMeta);

  // overview
  const [ currentStyle, setCurrentStyle ] = React.useState(styles.results[0]);
  const [ currentSku, setCurrentSku ] = React.useState('none');
  const [ currentSize, setCurrentSize ] = React.useState('Select Size');
  const [ currentQty, setCurrentQty ] = React.useState('-');
  const [ currentTotal, setCurrentTotal ] = React.useState(0);

  React.useEffect(
    () => {
      setCurrentSku('none');
      setCurrentSize('Select Size');
      setCurrentQty('-');
      setCurrentTotal(0);
    }, [currentStyle],
  );

  return (
    <Theme>
      <Nav>
        <NavInner>
          <Cart>
            <img src="https://img.icons8.com/windows/32/000000/shopping-cart-promotion.png"/>
          </Cart>
          <Logo><img src="/assets/logo.png" height="37" /></Logo>
        </NavInner>
      </Nav>
      <Container>
        <Overview
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
        />
        <Related relatedProducts={related} currentProduct={product} />
        <Outfit product={product} style={currentStyle} meta={meta} />
        <QA productId={getProduct.id} />
        <RR reviews={reviews} meta={meta} product={product} />
      </Container>
    </Theme>
  );
}

export default App;

// save for when we want to dynamically render

// const [productID, setProductID] = React.useState(getProduct.id);
// useEffect(() => {
//   grabInfo(productID)
//     .then((data) => {
//       setProduct(data[0].data); // infinite looping
//       setStyles(data[1].data);
//       setRelated(data[2].data);
//     });
// }, [productID]);
