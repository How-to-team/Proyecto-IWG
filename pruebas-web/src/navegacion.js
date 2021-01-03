import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navegacion.css"


function navegacion() {
  return (
      <nav>
        <div className="Appnav">
            <div className="cards">
                <h1 className='titulo'> Interactive learning hardware & assembly</h1>
                <CardDeck className="card-deck">
                    <Card className='cardgamer' bg='info' border='dark'>
                    <Card.Body>
                        <Card.Title>PC Gamer</Card.Title>
                        <Card.Text>
                        En esta sección te enseñaremos a ensamblar un computador diseñado para juegos donde principalmente se requerirá de componentes capaces de correr todo tipo de títulos a altas cantidades de fotogramas.
                        </Card.Text>
                        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/791363481092882452/703-Negro-6.png" />
                    </Card.Body>
                    <Card.Footer>       
                        <Link to="/pcgamer">
                            <Button variant="primary">ir al computador gamer</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                    <Card bg='success' border='dark'>
                    <Card.Body>
                        <Card.Title>PC de renderizados</Card.Title>
                        <Card.Text>
                        En esta sección te enseñaremos a ensamblar un computador de renderizados donde los núcleos y los hilos de trabajo son lo mas importante a la hora de realizar procesos exigentes.
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.discordapp.net/attachments/775904281671893042/783394618321666129/258152.png?width=567&height=567" />
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/pcrender">
                            <Button variant="primary">ir al computador de renderizados</Button>
                        </Link>
                    </Card.Footer>
                    </Card>
                    <Card bg='danger' border='dark'>
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
                </CardDeck>
            </div>
        </div>
      </nav>
  );
}

export default navegacion;