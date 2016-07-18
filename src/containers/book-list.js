import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, selectBook, deleteBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className="container-fluid">
          <span
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
            
          </span>
          <span key={book.id} className="btn btn-danger btn-sm"
              onClick={() => {this.props.deleteBook(book.id)}}
            >Delete {book.title}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        {this.renderList()}
      </div>
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
    fetchBooks: fetchBooks, deleteBook: deleteBook
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
