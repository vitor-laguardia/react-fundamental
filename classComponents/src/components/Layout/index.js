import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PostList from '../PostsList';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
        <Footer />
      </>
    );
  }
}
