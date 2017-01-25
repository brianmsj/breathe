import React from 'react';
import SceneList from '../containers/scene_list';
import BackgroundScene from '../containers/background_scene';
import Welcome from './welcome';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <SceneList />
          <BackgroundScene />
          <Welcome />
        </div>
      </div>
    )
  }
}