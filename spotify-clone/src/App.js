import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbarfy from './components/Navbarfy';
import Mainfy from './components/Mainfy';
import Playerfy from './components/Playerfy';
import Searchfy from './components/Searchfy';

function App() {
  return (
   <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2} className='d-none d-lg-block'>
            <Navbarfy />
          </Col>
          <Col xs={12} lg={9} className='offset-lg-3 main-page'>
          <Routes>
            <Route path='/' element={<Mainfy />}></Route>
            <Route path='/search/:search' element={<Searchfy />} />
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
