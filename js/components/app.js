import React from 'react';

import SceneList from '../containers/scene_list';
import BackgroundScene from '../containers/background_scene';

export default function App() {
  return (
    <div>
      <SceneList />
      <BackgroundScene />
    </div>
  )
}