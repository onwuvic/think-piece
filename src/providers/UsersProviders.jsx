
import React, { Component, createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UsersContext = createContext({ user: null });

class UsersProviders extends Component {
    state = {
        user: null
    };

    unsubcribeFromAuth = null;

    async componentDidMount() {
        this.unsubcribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const userRef = await createUserProfileDocument(authUser);

                userRef.onSnapshot(snapShot => {
                    this.setState({ user: { uid: snapShot.id, ...snapShot.data() }})
                })
            }
            
            this.setState({ authUser })
        });
    }

    componentWillUnmount() {
        this.unsubcribeFromAuth();
    }

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return (
        <UsersContext.Provider value={user}>
            { children }
        </UsersContext.Provider>
    );
  }
}

export default UsersProviders;
