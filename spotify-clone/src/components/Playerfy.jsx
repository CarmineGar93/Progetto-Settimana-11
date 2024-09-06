import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { AddToFavAction, PlaySongAction, RemoveFromFavAction, StopSongAction } from "../redux/actions/actions"


function Playerfy() {
    const song = useSelector(state => state.song.song)
    const isPlaying = useSelector(state => state.song.isPlaying)
    const fav = useSelector(state => state.fav.list)
    const dispatch = useDispatch()
    return (
        <Row className="h-100">
            <Col lg={10} className="offset-lg-2">
                <Row className="h-100 justify-content-between align-items-center">
                    <Col xs={4} md={3} className="d-flex ms-lg-5 ms-xl-0">
                        {
                            song && <>
                                <div>
                                    <img src={song.album.cover_medium} alt="" width={60} />
                                </div>
                                <div>
                                    <p className="text-white mb-0 custom">{song.title}</p>
                                    <p className="text-white mb-0 custom">{song.artist.name}</p>
                                </div>
                            </>
                        }

                    </Col>
                    <Col xs={7} md={7} className="playerControls">
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
                                        <img src="/stop.png" alt="stop" className="custom-img" onClick={() => dispatch(StopSongAction())} />
                                    </a>
                                ) : (
                                    <a href="#v">
                                        <img src="/play.png" alt="play" onClick={() => dispatch(PlaySongAction())} />
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
                    <Col xs={1} className=" d-none d-sm-block">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={
                                fav.find(s=> s.id === song.id) ? 'green' : "gray"
                            } className="bi bi-heart-fill pointer" viewBox="0 0 16 16"  onClick={() => {
                                !fav.find(s=> s.id === song.id) ?
                                  dispatch(AddToFavAction(song)) : dispatch(RemoveFromFavAction(song))
                              }}>
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default Playerfy