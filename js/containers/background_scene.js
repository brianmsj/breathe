import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from '../components/video';

export class BackgroundScene extends Component {
  render() {
    if(!this.props.scene) {
      return <div>Select a scene to get started.</div>
    }

    else if(this.props.scene.title === 'Introspection') {
      return (
        <Video url="https://www.youtube.com/embed/W1-wSw2tW_w?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W1-wSw2tW_w" />
      )
    }

    else if(this.props.scene.title === 'Halcyon') {
      return (
        <Video url="https://www.youtube.com/embed/GyRF2VYrUDs?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=GyRF2VYrUDs" />
      )
    }

    else if(this.props.scene.title === 'Breathe') {
      return (
        <Video url="https://www.youtube.com/embed/CNYB5Ol489U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=CNYB5Ol489U" />
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