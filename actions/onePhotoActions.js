import {DISPLAY_ONE_PHOTO} from './actionTypes'

export function displayOnePhoto(photo){
    return (dispatch) => {
        dispatch({type: DISPLAY_ONE_PHOTO, onePhoto: photo })
    }      
}
