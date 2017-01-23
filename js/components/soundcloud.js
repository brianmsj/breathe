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
  componentDidMount() {
     let timedelay = 1;
     function delayCheck() {
       if(timedelay == 5) {
         $('.soundcloud').fadeOut();
         timedelay = 1;
       }
       timedelay = timedelay + 1;
     }
      
     $(document).mousemove(function() {
       $('.soundcloud').fadeIn();
       timedelay = 1;
       clearInterval(_delay);
        _delay = setInterval(delayCheck, 300);
     });
     // page loads starts delay timer
      let _delay = setInterval(delayCheck, 300)
  }

  render() {
    return (
      <div className="soundcloud">
        <SoundCloudEmbed id={this.props.id}/>
      </div>
      );
  }
}