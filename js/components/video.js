import React from 'react';

export default function Video(props) {
  const url = `https://www.youtube.com/embed/${props.url}?`;
  const options = `controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${props.url}`;
  const src = `${url}${options}`;

  return (
    <div className="video-container">
      <div className="video-background">
        <div className="video-foreground">
          <iframe src={src}
                  frameBorder="0"
                  allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}