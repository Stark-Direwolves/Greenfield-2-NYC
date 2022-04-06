import React from 'react';
import ReactDOM from 'react-dom';
import Comparison from '../components/Comparison.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comparison />, div);
});
