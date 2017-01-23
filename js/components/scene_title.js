import React, { Component } from 'react';
import $ from 'jquery';

export default class SceneTitle extends Component {
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

          $('.scene-title').fadeIn();
          $('html').css({cursor: ''});
        }

        else {
          fadeInBuffer = false;
        }

        timer = setTimeout(function () {
          $('.scene-title').fadeOut()
          $('html').css({cursor: 'none'});
          fadeInBuffer = true;
        }, 2000)
      });
    });
  };

  render() {
    return (
      <h1 className="scene-title">{this.props.title}</h1>
    );
  };
}