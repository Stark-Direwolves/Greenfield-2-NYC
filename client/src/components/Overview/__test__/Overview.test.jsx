import React from 'react';
import ReactDOM from 'react-dom';
import Overview from '../Overview.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overview />, div);
});
