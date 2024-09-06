import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbarfy from './components/Navbarfy';
import Mainfy from './components/Mainfy';
import Playerfy from './components/Playerfy';

function App() {
  return (
   <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2} className='d-none d-md-block'>
            <Navbarfy />
          </Col>
          <Col xs={12} md={9} className='offset-md-3 main-page'>
          <Routes>
            <Route path='/' element={<Mainfy />}></Route>
          </Routes>
          </Col>
        </Row>
      </Container>
      <Container fluid className='fixed-bottom bg-container pt-1'>
        <Playerfy />
      </Container>
   </BrowserRouter>
  );
}

export default App;
