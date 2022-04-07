import React, { useState } from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from './Overview/Overview.jsx';
import Related from './Related/components/Related.jsx';

function App({ getProduct, getStyles, getRelated, getReviews, getMeta }) {
  const [product, setProduct] = useState(getProduct);
  const [styles, setStyles] = useState(getStyles);
  const [related, setRelated] = useState(getRelated);
  const [reviews, setReviews] = useState(getReviews);
  const [meta, setMeta] = useState(getMeta);

  return (
    <div id="container">
<<<<<<< HEAD
      <Overview product={product} styles={styles} />
      <Related relatedProducts={related} currentProduct={product} />
=======
      <Overview product={product} styles={styles} meta={meta} />
      <Related relatedProducts={related} />
>>>>>>> 0b68e290bc57fa736865c340f3c9ca8a101ffb2c
      <QA productId={getProduct.id} />
      <RR reviews={reviews} meta={meta} product={product} />
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
