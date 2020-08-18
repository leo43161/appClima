import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header';
import CardClima from './Components/CardClima';
import Formulario from './Components/Formulario';

function App() {
  return (
    <div>
      <Header titulo="App del clima"></Header>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <CardClima></CardClima>
          </div>
          <div className="col-sm-12 col-md-6">
            <Formulario></Formulario>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
