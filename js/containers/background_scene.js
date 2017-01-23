import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../components/video';
import SoundCloud from '../components/soundcloud';

export class BackgroundScene extends Component {
  render() {
    if(!this.props.scene) {
      return <div>Select a scene to get started.</div>
    }

    else if(this.props.scene.title === 'Introspection') {
      return (
        <div>
          <Video url={this.props.scene.youTubeURL} />
          <SoundCloud id={this.props.scene.soundCloudID} />
        </div>
      )
    }

    else if(this.props.scene.title === 'Halcyon') {
      return (
        <div>
          <Video url={this.props.scene.youTubeURL} />
          <SoundCloud id={this.props.scene.soundCloudID} />
        </div>
      )
    }

    else if(this.props.scene.title === 'Breathe') {
      return (
        <Video url={this.props.scene.youTubeURL} />
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    scene: state.activeScene
  };
}

export default connect(mapStateToProps)(BackgroundScene);