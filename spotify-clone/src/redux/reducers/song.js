import {ADD_SONG, STOP_SONG, PLAY_SONG, UP_PROGRESS} from '../actions/actions'

const initialState = {
    song: null,
    isPlaying: false,
    progress: '0',
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {
                ...state,
                song: action.payload,
                isPlaying: true,
            };
        case STOP_SONG:
            return {
                ...state,
                isPlaying: false,
            };
        case PLAY_SONG:
            return {
                ...state,
                isPlaying: true,
            };
            case UP_PROGRESS: 
            return {
                ...state,
                progress: action.payload
            }
        default:
            return state;
    }
};

export default songReducer
