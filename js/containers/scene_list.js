import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SceneList extends Component {
  constructor(props) {
    super(props)
  }

  renderScenes() {
    return this.props.scenes.map((scene, index) => {
      return (
        <li key={index}>{scene.title}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderScenes()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return (
    scenes: state.scenes
  );
}

export default connect(mapStateToProps)(SceneList);