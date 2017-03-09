import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import theme from './BookDetail.css';

class BookDetail extends Component {
  getDescription() {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    return description;
  }

  render() {
    if (!this.props.book) {
      return (
          <List selectable ripple theme={theme}>
            <ListSubHeader caption='Select a book for more details' />
          </List>
      );
    }
    return (
        <List selectable ripple theme={theme}>
          <ListSubHeader caption='Detail' />
          <Card theme={theme}>
            <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title={this.props.book.title}
                subtitle={this.props.book.author}
            />
            <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
            />
            <CardTitle
                title="Title goes here"
                subtitle="Subtitle here"
            />
            <CardText>{ this.getDescription() }</CardText>
            <CardActions>
              <Button label="Action 1" />
              <Button label="Action 2" />
            </CardActions>
          </Card>
        </List>
    );
  }
}

/**
 * Pass object of active book state as props for BookDetail
 *
 * @param state
 * @returns {{book: *}}
 */
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);