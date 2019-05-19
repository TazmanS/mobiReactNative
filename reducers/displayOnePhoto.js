import {DISPLAY_ONE_PHOTO} from '../actions/actionTypes'


const initialState = {
    onePhoto: {}
}

const displayOnePhoto = function(state = initialState, actions){
    
    switch(actions.type){
        case DISPLAY_ONE_PHOTO:
            return{
                onePhoto: actions.onePhoto
            }

        default: 
            return state    

    }
}

export default displayOnePhoto