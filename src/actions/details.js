import { DETAILS_HAS_ERRORED, DETAILS_IS_LOADING, DETAILS_FETCH_DATA_SUCCESS } from './actionTypes';


export const detailsHasErrored = hasErrored => ({
    type: DETAILS_HAS_ERRORED,
    hasErrored
});

export const detailsIsLoading = isLoading => ({
    type: DETAILS_IS_LOADING,
    isLoading
});

export const detailsFetchDataSuccess = details => ({
    type: DETAILS_FETCH_DATA_SUCCESS,
    details: details
});

export const detailsFetchData = url => (
    (dispatch) => {
        dispatch(detailsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(detailsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((details) => dispatch(detailsFetchDataSuccess(details[0])))
            .catch(() => dispatch(detailsHasErrored(true)));
    }
);
