import React, { Component } from 'react';
import $ from 'jquery';

export default class Welcome extends Component {
  componentDidMount() {
    $(function () {
      let timer;

      $(document).mousemove(function () {
        if (timer) {
          clearTimeout(timer);
          timer = 0;
          $('.welcome-container').fadeIn();
        }

        timer = setTimeout(function () {
          $('.welcome-container').fadeOut()
        }, 3000)
      });
    });
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome welcome-h1">Welcome to <span className="breathe">Breathe</span></h1>
        <p className="welcome welcome-p">Take a moment to relax and clear your mind</p>
        <div className="about">
          <p className="welcome welcome-p">Breathe is an experimental React application that seamlessly
            combines API data from YouTube and SoundCloud to help you find
            peace of mind by presenting relaxing imagery and sounds in full-screen format.</p>
        </div>
      </div>
    )
  }
}