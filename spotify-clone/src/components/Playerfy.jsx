import { Col, Row } from "react-bootstrap"

function Playerfy() {
    return (
        <Row className="h-100">
            <Col lg={10} className="offset-lg-2">
                <Row className="h-100 flex-column justify-content-center align-items-center">
                    <Col xs={6} md={4} className="playerControls">
                        <div className="d-flex">
                            <a href="#a">
                                <img src="/shuffle.png" alt="shuffle" />
                            </a>
                            <a href="#b">
                                <img src="/prev.png" alt="prev" />
                            </a>
                            <a href="#v">
                                <img src="/play.png" alt="play" />
                            </a>
                            <a href="#d">
                                <img src="/next.png" alt="next" />
                            </a>
                            <a href="#e">
                                <img src="/repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div class="progress mt-3">
                            <div role="progressbar"></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Playerfy