export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  case 'BOOK_DELETE':
    return {id:null,title:null};
  case 'UPDATE_BOOK':
    return {id:null,title:null};
  }

  return state;
}