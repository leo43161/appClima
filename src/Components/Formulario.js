import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Formulario = (props) => {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [error, setError] = useState(false);
  const [msjError, setMsjerror] = useState("");

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar campos
    if (search.ciudad.trim() === "" || search.pais.trim() === "") {
      setError(true);
      setMsjerror("Todos los campos son obligatorios");
      return;
    }
    setError(false);
    //consultar api del clima
    consultarAPI();
  };

  const consultarAPI = async() =>{
    const apikey = "a27847aac3dab2bcb81154f5a2bc6868";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.ciudad},${search.pais}&appid=${apikey}&units=metric`;

    const repuesta = await fetch(url);
    const result = await repuesta.json();
    console.log(result);
    if(result.cod === "404"){
      setError(true);
      setMsjerror("Ciudad no encontrada");
      props.setResultado({});
    }else{
      setError(false);
      props.setResultado(result);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {error ? (
          <Alert variant={"danger"}>{msjError}</Alert>
        ) : null}
        <Form.Group controlId="ciudad">
          <Form.Label>Ciudad *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: San miguel de Tucuman"
            onChange={handleChange}
            name="ciudad"
            value={search.ciudad}
          />
        </Form.Group>
        <Form.Group controlId="pais">
          <Form.Label>Pais *</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="pais"
            value={search.pais}
          >
            <option value="">--Seleccione un Pais--</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="CL">Chile</option>
            <option value="MX">Mexico</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" className="w-100 mt-3" type="submit">
          Buscar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
