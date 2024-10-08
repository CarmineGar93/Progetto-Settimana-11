import { Container, InputGroup, Button, Form, Navbar, Nav } from 'react-bootstrap'
import house from '../house.svg'
import book from '../book.svg'
import {Link} from 'react-router-dom'

import Favouritefy from './Favouritefy'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Navbarfy() {
    const[tofind, setTofind] = useState('')
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/search/${tofind}`)
        setTofind('')
    }
    return (
        <Navbar expand="md" className="fixed-left justify-content-between">
            <Container className='flex-column align-items-start'>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.png"
                        alt="Spotify Logo"
                        width="131"
                        height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='flex-column'>
                        <Link to='/' className='nav-link d-flex flex align-items-center mb-2'><img alt='' src={house}></img> &nbsp; Home</Link>
                        <Nav.Link href="#home" className='d-flex align-items-center mb-2'>
                            <img alt='' src={book}></img> &nbsp; Library
                        </Nav.Link>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                value={tofind}
                                onChange={(e)=>setTofind(e.target.value)}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                                Go
                            </Button>
                        </InputGroup>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Favouritefy />
            <div className="d-flex flex-column align-items-center w-100">
                <Button className='signup-btn'>Sign Up</Button>
                <Button className="login-btn" type="button">Login</Button>
                <div className='nav-btn'>
                    <a href="#home">Cookie Policy</a> |
                    <a href="#home"> Privacy</a>
                </div>

            </div>
        </Navbar>
    )
}

export default Navbarfy