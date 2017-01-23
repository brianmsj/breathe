import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../components/video';
import SoundCloud from '../components/soundcloud';
import SceneTitle from '../components/scene_title';

export class BackgroundScene extends Component {
  render() {
    if(!this.props.scene) {
      return <div>Select a scene to get started.</div>
    }

    return (
      <div>
        <SceneTitle title={this.props.scene.title}/>
        <Video url={this.props.scene.youTubeURL} />
        <SoundCloud id={this.props.scene.soundCloudID} />
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    scene: state.activeScene
  };
}

export default connect(mapStateToProps)(BackgroundScene);