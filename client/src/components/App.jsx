import React from 'react';
import QA from './QA/QA.jsx';
import RR from './RR/RR.jsx';
import Overview from'./Overview/Overview.jsx';
import Related from'./Related/Related.jsx';

function App() {
  return (
    <div>
      <div className="App">Hello World</div>
      <QA />
      <RR />
      <Overview />
      <Related />
    </div>
  );
}

export default App;
