import { DETAILS_HAS_ERRORED, DETAILS_IS_LOADING, DETAILS_FETCH_DATA_SUCCESS } from '../actions/actionTypes';


const initialState = {
    hasErrored: false,
    isLoading: false,
    details: {}
}

const detailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case DETAILS_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored
            }
        case DETAILS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case DETAILS_FETCH_DATA_SUCCESS:
            return {
                details: action.details
            }
        default:
            return state;
    }
};

export default detailsReducer;