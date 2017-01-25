import React, { Component } from 'react';
import $ from 'jquery';

export default class Welcome extends Component {
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
          $('.welcome-container').fadeIn();
        }

        else {
          fadeInBuffer = false;
        }

        timer = setTimeout(function () {
          $('.welcome-container').fadeOut()
          fadeInBuffer = true;
        }, 5000)
      });
    });
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome welcome-h1">Welcome to <span className="breathe">Breathe</span></h1>
        <p className="welcome welcome-p">Take a moment to relax and clear your mind</p>
      </div>
    )
  }
}