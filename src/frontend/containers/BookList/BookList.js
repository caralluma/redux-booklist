import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import theme from './BookList.css';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <ListItem
              key={book.title}
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

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);