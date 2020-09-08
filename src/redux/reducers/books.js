import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_ERROR,
} from "../actionTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_LOADING: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case FETCH_BOOKS_SUCCESS: {
      return {
        ...initialState,
        data: action.payload,
      };
    }
    case FETCH_BOOKS_ERROR: {
      return {
        ...initialState,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
