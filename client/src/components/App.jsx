import React from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from'./Overview/Overview.jsx';
import Related from'./Related/components/Related.jsx';

function App() {
  return (
    <div id="container">
      <Overview />
      <QA />
      <RR />
      <Related />
    </div>
  );
}

export default App;
