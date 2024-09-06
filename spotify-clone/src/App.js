import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbarfy from './components/Navbarfy';

function App() {
  return (
   <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Navbarfy />
          </Col>
          <Col xs={12} md={9} className='offset-md-3 main-page'>
          </Col>
        </Row>
      </Container>
   </BrowserRouter>
  );
}

export default App;
