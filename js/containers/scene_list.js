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

   componentDidMount() {
      let timedelay = 1;
      function delayCheck() {
        if(timedelay == 5) {
          $('.scene-list').fadeOut();
          timedelay = 1;
        }
        timedelay = timedelay + 1;
      }

      $(document).mousemove(function() {
        $('.scene-list').fadeIn();
        timedelay = 1;
        clearInterval(_delay);
         _delay = setInterval(delayCheck, 300);
      });
      // page loads starts delay timer
       let _delay = setInterval(delayCheck, 300)
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