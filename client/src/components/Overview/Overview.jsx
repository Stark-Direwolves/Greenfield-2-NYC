/* eslint-disable import/extensions */
import React from 'react';
import AddToCart from './children/AddToCart.jsx';
import ImageGallery from './children/ImageGallery.jsx';
import ProductInformation from './children/ProductInformation.jsx';
import StyleSelector from './children/StyleSelector.jsx';
import productInfo from '../../seedData/productSeed.js';

function Overview() {
  let styleList = productInfo.idStyles.results
  let currentProduct = productInfo.id
  const [ currentStyle, setCurrentStyle ] = React.useState(productInfo.idStyles.results[0]);

  /*
    productInformation will only get the style it needs and the default productInfo
    styleSelector receives the current index, the method to change state, and the list of styles
  */
  return (
    <div id="overview">
      <ImageGallery styleImages={currentStyle.photos} />
      <div id="details">
        <ProductInformation
          currentProduct={currentProduct}
          currentStyle={currentStyle}
        />
        <StyleSelector
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          styles={styleList}
        />
        <AddToCart style={currentStyle} />
      </div>
    </div>
  );
}

export default Overview;

/* ../../seedData/productSeed.js
  PRODUCT
  {
    id: 65631,
    campus: 'rfp',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2022-03-29T15:08:08.445Z',
    updated_at: '2022-03-29T15:08:08.445Z',
  }

  WILL BE MULTIPLE
  IDSTYLES
  product_id: '65631',
  results: [
    {
      style_id: 404874,
      name: 'Forest Green & Black',
      original_price: '140.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        2352322: {
          quantity: 8,
          size: 'XS',
        },
        2352323: {
          quantity: 16,
          size: 'S',
        },
        2352324: {
          quantity: 17,
          size: 'M',
        },
        2352325: {
          quantity: 10,
          size: 'L',
        },
        2352326: {
          quantity: 15,
          size: 'XL',
        },
        2352327: {
          quantity: 4,
          size: 'XL',
        },
      },
    }

  ID
    id: 65631,
  campus: 'rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2022-03-29T15:08:08.445Z',
  updated_at: '2022-03-29T15:08:08.445Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],

  const related = [
  65632,
  65633,
  65638,
  65637,
];
*/
