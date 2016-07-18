import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const CREATE_BOOK = 'CREATE_BOOK';
export const BOOK_DELETE = 'BOOK_DELETE';

const ROOT_URL = 'http://localhost:3000';

export function fetchBooks() {
	const request = axios.get(`${ROOT_URL}/posts`);
	  return {
	    type: FETCH_BOOKS,
	    payload: request
	  };
}

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function createBook(props) {
  const request = axios.post('http://localhost:3000/newPost', props);
  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function deleteBook(id) {
  const request = axios.delete(`${ROOT_URL}/deletePost/${id}`);
  return {
    type: BOOK_DELETE,
    payload: request
  };
}