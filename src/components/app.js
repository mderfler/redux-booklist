import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import BookNew from '../containers/book-new';

export default class App extends Component {
  render() {
    return (
      <div>
      	<BookList  />
        <BookNew />
        <BookDetail  />
        
      </div>
    );
  }
}
