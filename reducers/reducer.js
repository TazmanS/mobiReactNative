import {combineReducers} from 'redux'

import displayGallery from './displayGallery'
import displayOnePhoto from './displayOnePhoto'

const reducer = combineReducers({
    displayGallery,
    displayOnePhoto
})

export default reducer