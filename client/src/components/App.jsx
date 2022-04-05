import React, { useEffect } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from'./Overview/Overview.jsx';
import Related from'./Related/components/Related.jsx';

function App({ getProduct, getStyles, getRelated, grabInfo }) {
  const [product, setProduct] = React.useState(getProduct);
  const [styles, setStyles] = React.useState(getStyles);
  // not sure where you were keeping state/data for your app julian

  return (
    <div id="container">
      <Overview product={product} styles={styles} />
      <Related relatedProducts={getRelated} grabInfo={grabInfo} setProduct={setProduct} />
      <QA />
      <RR />
    </div>
  );
}

export default App;
