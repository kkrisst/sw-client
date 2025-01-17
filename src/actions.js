import { getRoots, getRoot, getSpecific } from './api';
import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
	FETCH_ROOT,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS,
	FETCH_SPECIFIC,
	FETCH_SPECIFIC_FAILURE,
	FETCH_SPECIFIC_SUCCESS,
} from './constants';

export const fetchRoots = () => dispatch => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};

export const fetchRoot = (rootId) => dispatch => {
	dispatch({ type: FETCH_ROOT });

	const request = getRoot(rootId);

	return request.then(
		resp => dispatch({ type: FETCH_ROOT_SUCCESS, payload: resp, rootId }),
		error => dispatch({ type: FETCH_ROOT_FAILURE, payload: error }),
	);
};

export const selectSpecificRef = ref => dispatch => {
	dispatch({ type: FETCH_SPECIFIC });

	const request = getSpecific(ref);

	return request.then(
		resp => dispatch({ type: FETCH_SPECIFIC_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_SPECIFIC_FAILURE, payload: error }),
	);
};