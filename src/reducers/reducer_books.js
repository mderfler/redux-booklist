import { FETCH_BOOKS, CREATE_BOOK, BOOK_DELETE, UPDATE_BOOK } from '../actions/index';

const INITIAL_STATE = { allBooks: [], book: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_BOOKS:
	  return { ...state, allBooks: action.payload.data };
	case CREATE_BOOK:
	  return { ...state, allBooks: action.payload.data };
	case BOOK_DELETE:
	  return { ...state, allBooks: action.payload.data };
	case UPDATE_BOOK:
	  return { ...state, allBooks: action.payload.data };  
	default:
	  return state;
  }
}
