import {DISPLAY_GALLERY} from './actionTypes'

export function displayAllPhoto(){
    return (dispatch) => {

        async function getResource(){
            const res = await fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0");
            if(!res.ok){
                throw new Error("WARNING");
            }
            return await res.json();
        }

        getResource().then((one) => {
            dispatch({type: DISPLAY_GALLERY, allPhoto: one })
          });
    }      
}
