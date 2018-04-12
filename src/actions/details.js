export function detailsHasErrored(bool) {
    return {
        type: 'DETAILS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function detailsIsLoading(bool) {
    return {
        type: 'DETAILS_IS_LOADING',
        isLoading: bool
    }
}

export function detailsFetchDataSuccess(details) {
    return {
        type: 'DETAILS_FETCH_DATA_SUCCESS',
        details: details
    }
}

export function detailsFetchData(url) {
    return (dispatch) => {
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
}