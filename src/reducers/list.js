const initialState = {
    hasErrored: false,
    isLoading: false,
    currencies: []
}

const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LIST_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            }
        case 'LIST_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'LIST_FETCH_DATA_SUCCESS':
            return {
                currencies: action.currencies
            }
        default:
            return state;
    }
};

export default listReducer;