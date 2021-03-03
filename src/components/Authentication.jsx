import React, { useContext } from 'react';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';
import { UsersContext } from '../providers/UsersProviders';

const Authentication = ({ loading }) => {
  const user = useContext(UsersContext);
  
  if (loading) return null;

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
