import {DISPLAY_GALLERY} from '../actions/actionTypes'


const initialState = {
    gallery: []
}

const displayGallery = function(state = initialState, actions){
    switch(actions.type){
        case DISPLAY_GALLERY:
            return{
                gallery: actions.allPhoto
            }

        default: 
            return state    

    }
}

export default displayGallery