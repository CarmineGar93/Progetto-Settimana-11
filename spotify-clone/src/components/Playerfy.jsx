import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { PlaySongAction, StopSongAction } from "../redux/actions/actions"

function Playerfy() {
    const song = useSelector(state => state.song.song)
    const isPlaying = useSelector(state => state.song.isPlaying)
    const dispatch = useDispatch()
    return (
        <Row className="h-100">
            <Col lg={10} className="offset-md-2 offset-lg-2">
                <Row className="h-100 justify-content-around align-items-center">
                    <Col xs={3} md={3} className="d-flex ">
                        {
                            song && <>
                                <div>
                                    <img src={song.album.cover_medium} alt="" width={80} />
                                </div>
                                <div>
                                    <p className="text-white mb-0 custom">{song.title}</p>
                                    <p className="text-white mb-0 custom">{song.artist.name}</p>
                                </div>
                            </>
                        }

                    </Col>
                    <Col xs={6} md={4} className="playerControls">
                        <div className="d-flex">
                            <a href="#a">
                                <img src="/shuffle.png" alt="shuffle" />
                            </a>
                            <a href="#b">
                                <img src="/prev.png" alt="prev" />
                            </a>
                            {
                                isPlaying ? (
                                    <a href="#v">
                                        <img src="/stop.png" alt="stop" className="custom-img" onClick={()=>dispatch(StopSongAction())}/>
                                    </a>
                                ) : (
                                    <a href="#v">
                                        <img src="/play.png" alt="play" onClick={()=>dispatch(PlaySongAction())} />
                                    </a>
                                )
                            }
                            <a href="#d">
                                <img src="/next.png" alt="next" />
                            </a>
                            <a href="#e">
                                <img src="/repeat.png" alt="repeat" />
                            </a>
                        </div>
                        <div className="progress mt-3">
                            <div role="progressbar"></div>
                        </div>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default Playerfy