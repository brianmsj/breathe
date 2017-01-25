import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import BackgroundScene from './containers/background_scene';
import Video from './components/video';

export default (
  <Route path='/' component={Video} />
);