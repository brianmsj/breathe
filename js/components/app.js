import React from 'react';
import SceneList from '../containers/scene_list';
import BackgroundScene from '../containers/background_scene';
import Welcome from './welcome';

export default function App() {
  return (
    <div className="app-container">
      <SceneList />
      <BackgroundScene />
      <Welcome />
    </div>
  )
}