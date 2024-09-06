import { Col, Row } from "react-bootstrap";
import Sectionfy from "./Sectionfy";
import { useDispatch, useSelector } from "react-redux";
import { StopSongAction } from "../redux/actions/actions";

function Mainfy() {
    const song = useSelector(state=>state.song.song)
    const isPlaying = useSelector(state=>state.song.isPlaying)
    const handlePlay = (e) => {
        if(isPlaying) {
            e.target.play()
        } else {
            e.target.pause()
        }
    }
    const dispatch = useDispatch()
    return (
        <>
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="#a">TRENDING</a>
                    <a href="#b">PODCAST</a>
                    <a href="#c">MOODS AND GENRES</a>
                    <a href="#d">NEW RELEASES</a>
                    <a href="#e">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Sectionfy title='Rock Classics' search='queen' />
                <Sectionfy title='Pop Classics' search='katyperry' />
                <Sectionfy title='HipHop Classics' search='eminem' />
                <div className=" invisible custom-margin">
                    {
                        song && <audio src={song.preview} onPlay={handlePlay} onEnded={()=>dispatch(StopSongAction())} autoPlay></audio>
                    }
                    
                </div>
            </Row>
        </>
    )
}

export default Mainfy