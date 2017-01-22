import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BackgroundScene extends Component {
  render() {
    if(!this.props.scene) {
      return <div>Select a scene to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.scene.title}</div>
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