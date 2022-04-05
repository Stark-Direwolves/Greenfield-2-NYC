import React, { useEffect } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from'./Overview/Overview.jsx';
import Related from'./Related/components/Related.jsx';

function App({ getProduct, getStyles, getRelated, grabInfo }) {
  const [productID, setProductID] = React.useState(getProduct.id);
  const [product, setProduct] = React.useState(getProduct);
  const [styles, setStyles] = React.useState(getStyles);
  const [related, setRelated] = React.useState(getRelated);

  useEffect(() => {
    grabInfo(productID)
      .then((data) => {
        setProduct(data[0].data); // infinite looping
        setStyles(data[1].data);
        setRelated(data[2].data);
      });
  }, [productID]);
  // not sure where you were keeping state/data for your app julian

  return (
    <div id="container">
      <Overview product={product} styles={styles} />
      <Related relatedProducts={related} setProductID={setProductID} />
      <QA />
      <RR />
    </div>
  );
}

export default App;