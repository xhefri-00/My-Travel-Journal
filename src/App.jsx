import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data";
import './index.css';


const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="cards-container">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
