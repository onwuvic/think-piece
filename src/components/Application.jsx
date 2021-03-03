import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Posts from './Posts';
import Authentication from './Authentication';
import UserProfile from './UserProfile';

class Application extends Component {
  // state = {
  //   // posts: [],
  //   user: null
  // };

  // // unsubcribeFromFirestore = null;
  // unsubcribeFromAuth = null;

  // async componentDidMount() {
  //   // this.unsubcribeFromFirestore = firestore.collection('posts').onSnapshot(snapShot => {
  //   //   const posts = snapShot.docs.map(collectIdsAndDocs);
  //   //   this.setState({ posts });
  //   // });

  //   this.unsubcribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
  //     const user = await createUserProfileDocument(authUser);
  //     console.log(user);
  //     this.setState({ user })
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubcribeFromAuth();
  // }

  // since we are listening to changes from the db directly 
  // we can move this to where it is actually be used and
  // our firebase db will listen and update this post state
  // so, we are moving this to Post Component
  // where create is been done.
  // handleCreate = async (post) => {
  //   firestore.collection('posts').add(post);

  //   // because we are using subscription it autmatically update our post collection
  //   // const { posts } = this.state;
  //   // const docRef = await firestore.collection('posts').add(post);
  //   // const doc = await docRef.get();
  //   // const newPost = collectIdsAndDocs(doc);
  //   // this.setState({ posts: [newPost, ...posts] });
  // };

  // since we are listening to changes from the db directly 
  // we can move this to where it is actually be used and
  // our firebase db will listen and update this post state
  // so, we are moving this to Post Component
  // where delete is been done.
  // handleRemove = async (id) => {
  //   firestore.doc(`posts/${id}`).delete();

  //   // deleting automatically update our post collection state
  //   // const allPosts = this.state.posts;
  //   // await firestore.doc(`posts/${id}`).delete();
  //   // const posts = allPosts.filter(post => post.id !== id);
  //   // this.setState({ posts });
  // }

  render() {

    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>
        
        <Authentication 
          // user={user}
        />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
        {/* <Posts 
          // posts={posts} 
          // onCreate={this.handleCreate} 
          // onRemove={this.handleRemove}
        /> */}
      </main>
    );
  }
}

export default Application;
