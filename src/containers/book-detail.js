import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook, fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' }; 
  }
   
  onFormSubmit(e) {
    e.preventDefault();
    this.props.updateBook({title:this.state.newTitle, id:this.props.book.id});
    this.setState({newTitle: '' });
  }

  onInputChange(newTitle) {
    this.setState({newTitle});
  }

  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div className="col-md-4">
        <h3>Details for:</h3>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div >Title: {this.props.book.title}
           <input className="updateBox" type="text" value={this.state.newTitle}
            onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
        </form>
        <div>ID: {this.props.book.id}</div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
    books: state.books.allBooks
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateBook: updateBook,
      fetchBooks: fetchBooks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
