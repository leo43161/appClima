import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="ciudad">
          <Form.Label>Ciudad *</Form.Label>
          <Form.Control type="text" placeholder="Ej: San miguel de Tucuman" />
        </Form.Group>
        <Form.Group controlId="pais">
          <Form.Label>Pais *</Form.Label>
          <Form.Control as="select">
            <option value="">--Seleccione un Pais--</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="CL">Chile</option>
            <option value="MX">Mexico</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" className="w-100 mt-3" type="submit">Buscar</Button>{' '}
      </Form>
    </div>
  );
};

export default Formulario;
