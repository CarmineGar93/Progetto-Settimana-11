import { Col, Row } from "react-bootstrap";
import Sectionfy from "./Sectionfy";
import { useDispatch, useSelector } from "react-redux";
import { StopSongAction } from "../redux/actions/actions";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function Searchfy() {
    const params = useParams().search
    const [isMounted, setisMounted] = useState(false)
    const song = useSelector(state => state.song.song)
    const isPlaying = useSelector(state => state.song.isPlaying)
    const audioRef = useRef(null); // Riferimento all'elemento audio
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(StopSongAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (!isMounted) {
            setisMounted(true)
            return
        }
        if (audioRef) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, song])
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
                <Sectionfy title={`Results for "${params}"`} search={params} />
                <div className=" invisible custom-margin">
                    {
                        song && <audio ref={audioRef} src={song.preview} onEnded={() => dispatch(StopSongAction())}></audio>
                    }

                </div>
            </Row>
        </>
    )

}

export default Searchfy