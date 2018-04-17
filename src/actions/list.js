import { LIST_HAS_ERRORED, LIST_IS_LOADING, LIST_FETCH_DATA_SUCCESS} from './actionTypes';

export const listHasErrored = hasErrored => ({
    type: LIST_HAS_ERRORED,
    hasErrored
});

export const listIsLoading = isLoading => ({
    type: LIST_IS_LOADING,
    isLoading
});

export const listFetchDataSuccess = currencies => ({
    type: LIST_FETCH_DATA_SUCCESS,
    currencies: currencies
});

export const listFetchData = url => (
    (dispatch) => {
        dispatch(listIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(listIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((currencies) => dispatch(listFetchDataSuccess(currencies)))
            .catch(() => dispatch(listHasErrored(true)));
    }
);
