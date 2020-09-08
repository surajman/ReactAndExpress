import {
    FETCH_BOOK_CATEGORIES_SUCCESS,
    FETCH_BOOK_CATEGORIES_LOADING,
    FETCH_BOOK_CATEGORIES_REQUEST,
    FETCH_BOOK_CATEGORIES_FAILED,
    SEARCH_BOOKS_SUCCESS,
    FETCH_BOOK_CATEGORIES_DETAIL_REQUEST,
    FETCH_BOOK_CATEGORIES_DETAIL_SUCCESS,
    FETCH_BOOK_CATEGORIES_DETAIL_FAILED,
} from "../actionTypes";

const initialState = {
  allBooks: null,
  error: null,
  loading: null,
  selectedBook: {
      data: null,
      error: null,
      loading: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK_CATEGORIES_REQUEST: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case FETCH_BOOK_CATEGORIES_LOADING: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case FETCH_BOOK_CATEGORIES_SUCCESS: {
      return {
        ...initialState,
        allBooks: action.payload,
      };
    }
    case FETCH_BOOK_CATEGORIES_FAILED: {
      return {
        ...initialState,
        error: action.error,
      };
    }
    case SEARCH_BOOKS_SUCCESS: {
        return {
            ...initialState,
            allBooks: action.payload.Search
        }
    }
    case FETCH_BOOK_CATEGORIES_DETAIL_REQUEST: {
        return {
            ...initialState,
            selectedBook: {
                ...initialState.selectedBook,
                loading: true,
            }
        }
    }
    case FETCH_BOOK_CATEGORIES_DETAIL_SUCCESS: {
        return {
            ...initialState,
            selectedBook: {
                ...initialState.selectedBook,
                data: action.payload,
            }
        }
    }
    case FETCH_BOOK_CATEGORIES_DETAIL_FAILED: {
      return {
        ...initialState,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
