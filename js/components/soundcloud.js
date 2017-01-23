import React from 'react';
import $ from 'jquery';

function SoundCloudEmbed(props) {
  const playerURL = 'https://w.soundcloud.com/player/?';
  const trackURL = `url=https%3A//api.soundcloud.com/tracks/${props.id}&amp;`;
  const options = 'color=43a1ff&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false';
  const src = `${playerURL}${trackURL}${options}`;

  return <iframe width="100%" height="166" scrolling="no" frameBorder="no" src= {src}></iframe>
}

export default class SoundCloud extends React.Component {
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

                 $('.soundcloud').fadeIn();
                 $('html').css({
                     cursor: ''
                 });
             } else {
                 fadeInBuffer = false;
             }


             timer = setTimeout(function () {
                 $('.soundcloud').fadeOut()
                 $('html').css({
                     cursor: 'none'
                 });
                 fadeInBuffer = true;
             }, 2000)
         });
     });
  }

  render() {
    return (
      <div className="soundcloud">
        <SoundCloudEmbed id={this.props.id}/>
      </div>
      );
  }
}