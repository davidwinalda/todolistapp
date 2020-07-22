import React from 'react';

import Card from './components/Card';
import './App.css';

function App() {

  // Data list card
  let card = [
    {
      location: 'Menara Mandiri',
      status: 'Sudah sampai tujuan',
    },
    {
      location: 'Binus Anggrek',
      status: 'Belum sampe sampe',
    }
  ];

  return (
    <div className="wrapper">
      <h1 className="title">Udah kemana aja ya kamu?</h1>
      <Card card={card}/>
    </div>
  );
};

export default App;
