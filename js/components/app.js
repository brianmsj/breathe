import React from 'react';
import SceneList from '../containers/scene_list';
import BackgroundScene from '../containers/background_scene';
import Welcome from './welcome';
import Mobile from './mobile';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <SceneList />
          <BackgroundScene />
          <Welcome />
        </div>
        <Mobile />
      </div>
    )
  }
}