import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Post from './Post';
import Comments from './Comments';
import { collectIdsAndDocs } from '../utilities';
import { firestore } from '../firebase';
import withUser from './withUser';

class PostPage extends Component {
    state = {
        post: null,
        comments: []
    }

    get postId() {
        return this.props.match.params.id;
    }

    get postRef() {
        return firestore.doc(`posts/${this.postId}`);
    }

    get commentsRef() {
        return this.postRef.collection('comments');
    }

    unsubscribeFromPost = null;
    unsubscribeFromComments = null;

    componentDidMount = async () => {
        this.unsubscribeFromPost = this.postRef.onSnapshot(snapShot => {
            const post = collectIdsAndDocs(snapShot);
            this.setState({ post });
        })

        this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapShot => {
            const comments = snapShot.docs.map(collectIdsAndDocs);
            this.setState({ comments });
        })
    }

    componentWillUnmount = () => {
        this.unsubscribeFromComments();
        this.unsubscribeFromPost();
    }

    createComment = (comment) => {
        const { user } = this.props;
        this.commentsRef.add({
            ...comment,
            user
        })
    }

    render() {
        const { post, comments } = this.state;

        return (
            <section>
                { post && <Post {...post} /> }
                <Comments
                    comments={comments}
                    onCreate={this.createComment}
                    />
            </section>
        );
    }
}

export default withRouter(withUser(PostPage));
