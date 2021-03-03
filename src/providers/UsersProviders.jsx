
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
            const user = await createUserProfileDocument(authUser);
            this.setState({ user })
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
