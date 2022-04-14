import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Theme from '../../Theme';
import '@testing-library/jest-dom';
import Related from '../components/Related';

const data = [{
  category: 'Jackets',
  default_price: '140.00',
  features: [{
    feature: 'Fabric',
    value: 'Canvas',
  }],
  id: 65631,
  name: 'Camo Onesie',
  ratings: { 1: '12' },
  styles: [{
    'default?': true,
    name: 'Forest Green & Black',
    original_price: '140.00',
    photos: [{
      thumbnail_url: null,
      url: null,
    }],
    sale_price: null,
    style_id: 404784,
  }],
}];

describe('Related Products', () => {
  it('renders header and a related product', () => {
    render(
      <Theme>
        <Related relatedProducts={data} />
      </Theme>,
    );

    expect(screen.getByRole('heading', { name: 'Related Products' })).toBeInTheDocument();
    expect(screen.getByText('Camo Onesie')).toBeInTheDocument();
    expect(screen.getByText('forest green & black')).toBeInTheDocument();
    expect(screen.getByText('$140.00')).toBeInTheDocument();
  });
});
