import React from 'react';

export default function Video(props) {
  return (
    <div className="video-container">
      <div className="video-background">
        <div className="video-foreground">
          <iframe src={props.url}
                  frameBorder="0"
                  allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}