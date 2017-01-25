import React, { Component } from 'react';
import $ from 'jquery';

export default class SceneTitle extends Component {
  componentDidMount() {
    $(function () {
      let timer;

      $(document).mousemove(function () {
        if (timer) {
          clearTimeout(timer);
          timer = 0;
          $('.scene-title').fadeIn();
        }

        timer = setTimeout(function () {
          $('.scene-title').fadeOut()
        }, 5000)
      });
    });
  }

  render() {
    return (
      <h1 className="scene-title animated fadeIn">{this.props.title}</h1>
    );
  };
}