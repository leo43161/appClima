import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header';
import CardClima from './Components/CardClima';
import Formulario from './Components/Formulario';

function App() {

  const[resultado, setResultado] = useState({});
  console.log(resultado);
  return (
    <div>
      <Header titulo="App del clima"></Header>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {resultado.main !== undefined ? (<CardClima resultado={resultado}></CardClima>) : null}
          </div>
          <div className="col-sm-12 col-md-6 mt-2 mt-0">
            <Formulario setResultado={setResultado}></Formulario>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
