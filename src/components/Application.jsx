import React, { Component } from 'react';

import Posts from './Posts';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

class Application extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const snapShot = await firestore.collection('posts').get();

    const posts = snapShot.docs.map(collectIdsAndDocs);

    this.setState({ posts });
  }

  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
