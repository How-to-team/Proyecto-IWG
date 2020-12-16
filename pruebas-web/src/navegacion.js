import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function navegacion() {
  return (
      <nav>
        <div className="App">
            <div className="cards">
                <h1> Interactive learning hardware & assembly</h1>
                <CardGroup>
                    <Card>
                    <Card.Body>
                        <Card.Title>PC Gamer</Card.Title>
                        <Card.Text>
                        En esta sección te enseñaremos a ensamblar un computador diseñado para juegos donde principalmente se requerirá de componentes capaces de correr todo tipo de títulos a altas cantidades de fotogramas.
                        </Card.Text>
                        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
                    </Card.Body>
                    <Card.Footer>       
                        <Link to="/pcgamer">
                            <Button variant="primary">ir al computador gamer</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Body>
                        <Card.Title>PC de renderizados</Card.Title>
                        <Card.Text>
                        En esta sección te enseñaremos a ensamblar un computador de renderizados donde los núcleos y los hilos de trabajo son lo mas importante a la hora de realizar procesos exigentes.
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/775904281671893042/783393394989989938/258152.png?width=567&height=567" />
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/pcrender">
                            <Button variant="primary">ir al computador de renderizados</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Body>
                        <Card.Title>PC de oficina</Card.Title>
                        <Card.Text>
                        En esta sección te enseñaremos a ensamblar un computador para oficina donde solamente se requieren componentes básicos capaces de correr programas con fines administrativos.
                        <br/>
                        <br/>
                        <br/>
                
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/775904281671893042/783396199679262731/z230-.png?width=580&height=495"/>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/pcoffice">
                            <Button variant="primary">ir al computador de oficina</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
      </nav>
  );
}

export default navegacion;