import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectScene } from '../actions/index';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

export class SceneList extends Component {
  renderScenes() {
    return this.props.scenes.map((scene, index) => {
      return (
        <li
          className="scene-list"
          onClick={() => this.props.selectScene(scene)}
          key={index}>{scene.title}</li>
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

$('.scene-list').click(function(event) {
  alert('hi');
})


function mapStateToProps(state) {
  return {
    scenes: state.scenes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectScene: selectScene}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneList);