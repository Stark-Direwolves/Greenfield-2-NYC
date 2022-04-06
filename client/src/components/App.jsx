import React, { useState } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from'./Overview/Overview.jsx';
import Related from'./Related/components/Related.jsx';

function App({ getProduct, getStyles, getRelated, getReviewMeta }) {
  const [product, setProduct] = useState(getProduct);
  const [styles, setStyles] = useState(getStyles);
  const [related, setRelated] = useState(getRelated);

  return (
    <div id="container">
      <Overview product={product} styles={styles} reviewMeta={getReviewMeta} />
      <Related relatedProducts={related} />
      <QA />
      <RR />
    </div>
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
