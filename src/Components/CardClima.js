import React from "react";
import Card from "react-bootstrap/Card";

const CardClima = (props) => {
  return (
    <div>
      <Card>
        <Card.Body className="d-flex flex-column justify-content-center">
          <div className="text-left">El clima de <strong>{props.resultado.name}</strong> es:</div>
          <div className="text-center">
            <img
              src={`http://openweathermap.org/img/wn/${props.resultado.weather[0].icon}@2x.png`}
              alt="Wheather"
            />
            {props.resultado.main.temp}° C
          </div>
          <div className="text-center">
            <p className="m-0">Temperatura Maxima de {props.resultado.main.temp_max}°C</p>
            <p className="m-0">Temperatura Minima de {props.resultado.main.temp_min}°C</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardClima;
