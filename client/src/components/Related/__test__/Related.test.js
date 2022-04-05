import React from 'react';
import ReactDOM from 'react-dom';
import Related from '../components/Related.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Related></Related>, div);
});
