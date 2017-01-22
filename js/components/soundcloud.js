import React from 'react';

function SoundCloudEmbed(props) {
  const playerURL = 'https://w.soundcloud.com/player/?';
  const trackURL = 'url=https%3A//api.soundcloud.com/tracks/303750328&amp;';
  const options = 'color=43a1ff&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false';
  const src = `${playerURL}${trackURL}${options}`;

  return <iframe width="100%" height="166" scrolling="no" frameborder="no" src= {src}></iframe>
}

export default class SoundCloud extends React.Component {
  render() {
    return (
      <div className="soundcloud">
        <SoundCloudEmbed />
      </div>
      );
  }
}