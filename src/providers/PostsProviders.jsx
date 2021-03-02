import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const PostsContext = createContext();

class PostsProviders extends Component {
  state = {
    posts: []
  };

  unsubcribeFromFirestore = null;

  async componentDidMount() {
    this.unsubcribeFromFirestore = firestore.collection('posts').onSnapshot(snapShot => {
      const posts = snapShot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromFirestore();
  }

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
        <PostsContext.Provider value={posts}>
            { children }
        </PostsContext.Provider>
    );
  }
}

export default PostsProviders;
