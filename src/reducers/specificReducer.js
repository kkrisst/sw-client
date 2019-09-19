import initialState from './initial-state';
import {
	FETCH_SPECIFIC,
	FETCH_SPECIFIC_FAILURE,
	FETCH_SPECIFIC_SUCCESS
} from '../constants';

const specificReducer = (state = initialState.specific, action) => {
  switch (action.type) {
    case FETCH_SPECIFIC:
      return { isLoading: true };

    case FETCH_SPECIFIC_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    
    case FETCH_SPECIFIC_SUCCESS:
      return {
        isLoading: false,
        payload: action.payload,
      };
    
    default:
      return state;
  }
};

export default specificReducer;