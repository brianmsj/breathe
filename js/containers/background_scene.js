import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BackgroundScene extends Component {
  render() {
    return (
      <div>Scene shows here</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scene: state.activeScene
  };
}

export default connect(mapStateToProps)(BackgroundScene);