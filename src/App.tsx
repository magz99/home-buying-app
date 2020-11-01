import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <Container>
          <Row className="align-items-center">
            <Col><a href="/financial-information">Financial Information</a></Col>
            <Col><a href="/mortgage-calculation">Mortgage Calculation</a></Col>
            <Col><a href="/property-map">Property Map</a></Col>
          </Row>
         </Container>
         
        </nav>
      </header>
    </div>
  );
}

export default App;
