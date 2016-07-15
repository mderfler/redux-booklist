import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.allBooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook,
    fetchBooks: fetchBooks
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
