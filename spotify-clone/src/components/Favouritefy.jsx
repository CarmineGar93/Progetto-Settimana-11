import {Container, Row, Col} from 'react-bootstrap'
import { useSelector } from "react-redux"

function Favouritefy() {
    const fav = useSelector(state => state.fav.list)
    return (
        <div className=' overflow-y-auto'>
            <h5 className="text-white ms-2">Brani che ti piacciono</h5>
            <Container>
                    {
                        fav.map((s)=>{
                            return (
                                <Row className='g-0 mb-2' key={s.id}>
                                <Col xs={4}>
                                    <img alt='' src={s.album.cover_small}></img>
                                </Col>
                                <Col xs={6}>
                                    <p className='custom mb-0'>{s.title}</p>
                                    <p className='custom mb-0'>{s.artist.name}</p>
                                </Col>
                                </Row>
                            )
                        })
                    }
            </Container>
        </div>
    )

}

export default Favouritefy