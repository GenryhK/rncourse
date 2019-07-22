import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE
} from '../actions/actionTypes'
import placeImg from '../../assets/oboitut.com_2927.jpg';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    img: placeImg
                })
            };
        case DELETE_PLACE: {
            return {
                ...state,
                places: state.places.filter((item) => {
                    return item.key !== state.selectedPlace.key
                } ),
                selectedPlace: null
            }
        }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find((item) => {
                    return item.key === action.placeKey
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state

    }
};

export default reducer
