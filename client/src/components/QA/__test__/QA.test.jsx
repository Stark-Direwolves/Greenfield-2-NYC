import React from 'react';
import { Container } from '../components/styles/container.style.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
});
