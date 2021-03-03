import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PostsProviders from './providers/PostsProviders';
import UsersProviders from './providers/UsersProviders';
import Application from './components/Application';

import './index.scss';

render(
    <Router>
        <UsersProviders>
            <PostsProviders>
                <Application />
            </PostsProviders>
        </UsersProviders>
    </Router>,
    document.getElementById('root')
);
