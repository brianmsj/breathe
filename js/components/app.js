import React from 'react';
import SceneList from '../containers/scene_list';
import BackgroundScene from '../containers/background_scene';
import Welcome from './welcome';
import ViewportMessage from './viewport_message';

export default function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <SceneList />
        <BackgroundScene />
        <Welcome />
      </div>
      <ViewportMessage />
    </div>
  )
}