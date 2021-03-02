import React from 'react';
import { render } from 'react-dom';
import PostsProviders from './providers/PostsProviders';

import './index.scss';

import Application from './components/Application';

render(
    <PostsProviders>
        <Application />
    </PostsProviders>,
    document.getElementById('root')
);
