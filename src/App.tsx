import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import FinancialInformation from './views/financial-information';
import MortgageCalculation from './views/mortgage-calculation';
import PropertyMap from './views/property-map';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="align-items-center">
            <Col><div>Home Buying Helper 🏠</div></Col>
            <Col xs={10}>
              <nav>
                <Container>
                  <Row>
                    <Col><Link to="/financial-information">Financial Information</Link></Col>
                    <Col><Link to="/mortgage-calculation">Mortgage Calculation</Link></Col>
                    <Col><Link to="/property-map">Property Map</Link></Col>
                  </Row>
                </Container>         
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
      <Switch>
          <Route path="/financial-information">
            <FinancialInformation />
          </Route>
          <Route path="/mortgage-calculation">
            <MortgageCalculation />
          </Route>
          <Route path="/property-map">
            <PropertyMap />
          </Route>
          <Route exact path="/">
            <Redirect to="/financial-information" />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
