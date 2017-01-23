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
          onClick={() => this.props.selectScene(scene)}
          key={index}><img src={scene.image} className="image" /></li>
      );
    });
  }

  //http://stackoverflow.com/questions/15532423/fade-out-mouse-cursor-when-inactive-with-jquery
  componentDidMount() {
    $(function () {
      var timer;
      var fadeInBuffer = false;
      $(document).mousemove(function () {
        if (!fadeInBuffer) {
          if (timer) {
            clearTimeout(timer);
            timer = 0;
          }
          $('.scene-list').fadeIn();
          $('html').css({cursor: ''});
        }

        else {
          fadeInBuffer = false;
        }

        timer = setTimeout(function () {
          $('.scene-list').fadeOut()
          $('html').css({cursor: 'none'});
          fadeInBuffer = true;
        }, 2000)
      });
    });
  }

  render() {
    return (
      <ul className="scene-list">
        {this.renderScenes()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  return {
    scenes: state.scenes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectScene: selectScene}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneList);