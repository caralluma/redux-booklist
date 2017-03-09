import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

import { selectBook } from './../../actions/index';

import theme from './BookList.css';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <ListItem
              key={book.title}
              onClick={() => this.props.selectBook(book)}
              avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
              caption={book.title}
              legend={book.author}
              rightIcon='star'
          />
      );
    });
  }

  render() {
    return (
        <List selectable ripple theme={theme}>
          <ListSubHeader caption='Books' />
          {this.renderList()}
        </List>
    );
  }
}

/**
 * Pass object of book list state as props for BookList
 *
 * @param state
 * @returns {{books: *}} state passed to props
 */
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

/**
 *
 * @param dispatch
 * @returns {{selectBook: selectBook}, dispatch} to reducers
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);