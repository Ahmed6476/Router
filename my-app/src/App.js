import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/home';
import About from './components/about/about';
import Weather from './components/weather/weather';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, NavDropdown, Navbar } from 'react-bootstrap';

import { useHistory } from 'react-router-dom'

function MainApp() {
  let history = useHistory()
  return (

    <>
      <div>
        {/* <nav>
          <ul>
            <li>
            <Button variant="primary" onClick = {()=>{
              history.push('/')
            }}>Home</Button>
            </li>
            <li>
            <Button variant="primary" onClick = {()=>{
              history.push('/about')
            }}>About</Button>
            </li>
            <li>
            <Button variant="primary" onClick = {()=>{
              history.push('/contact')
            }}>Contact</Button>
            </li>
          </ul>
        </nav> */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="">Nav Bar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => {
                  history.push('/')
                }}>Home</Nav.Link>
                <Nav.Link onClick={() => {
                  history.push('/about')
                }}>About</Nav.Link>
                <Nav.Link onClick = {() => {
                  history.push('/weather')
                }} >Weather App</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </>
  );
}
export default MainApp