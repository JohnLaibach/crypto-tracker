export function listHasErrored(bool) {
    return {
        type: 'LIST_HAS_ERRORED',
        hasErrored: bool
    };
}

export function listIsLoading(bool) {
    return {
        type: 'LIST_IS_LOADING',
        isLoading: bool
    }
}

export function listFetchDataSuccess(currencies) {
    return {
        type: 'LIST_FETCH_DATA_SUCCESS',
        currencies: currencies
    }
}

export function listFetchData(url) {
    return (dispatch) => {
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
}