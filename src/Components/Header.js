import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <Jumbotron className="bg-dark text-light">
      <section className="container text-center">
        <h1>{props.titulo}</h1>
        <p>
          Utilizando datos del proyecto OpenWeather https://openweathermap.org/
        </p>
        <p>
          <Button variant="primary">Ver mas</Button>
        </p>
      </section>
    </Jumbotron>
  );
};

export default Header;
