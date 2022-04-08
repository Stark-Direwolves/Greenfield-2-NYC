import React, { useState } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from './Overview/Overview.jsx';
import Related from './Related/components/Related.jsx';
import Outfit from './Related/components/Outfit.jsx';
import Theme from './Theme.jsx';

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
      <div id="container">
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
        <Outfit />
        <QA productId={getProduct.id} />
        <RR reviews={reviews} meta={meta} product={product} />
      </div>
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
