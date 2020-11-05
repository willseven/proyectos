import React from 'react';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';

function App() {
  return (
    <div className="container mt-5 p-4 bg-light shadow-lg">
      <h3>Componente 1</h3>
      <center><h1>TITULO</h1></center>
      <Componente2 />
      <Componente3 />
    </div>
  );
}

export default App;
