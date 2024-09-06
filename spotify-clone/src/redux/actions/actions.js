export const ADD_SONG = 'ADD_SONG'
export const STOP_SONG = 'STOP_SONG'
export const PLAY_SONG = 'PLAY_SONG'

export const AddSongAction = (song) => {
     return {
        type: ADD_SONG,
        payload: song
    }
}

export const StopSongAction = () => {
    return {
        type: STOP_SONG,
    }
}
export const PlaySongAction = () => {
    return {
        type: PLAY_SONG
    }
}