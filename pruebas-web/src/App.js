import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Computador Gamer</Card.Title>
          <Card.Text>
            Esta wea es un computador gamer
          </Card.Text>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
          <Button variant="primary">ir al computador gamer</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Computador Gamer</Card.Title>
          <Card.Text>
            Esta wea es un computador gamer
          </Card.Text>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
          <Button variant="primary">ir al computador gamer</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Computador Gamer</Card.Title>
          <Card.Text>
            Esta wea es un computador gamer
          </Card.Text>
          <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
          <Button variant="primary">ir al computador gamer</Button>
        </Card.Body>
      </Card>
        
    </div>
  );
}

export default App;
