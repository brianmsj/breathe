import React from 'react';

export default function IntrospectionVideo() {
  return (
    <div className="app-container">
      <div className="video-background">
        <div className="video-foreground">
          <iframe src="https://www.youtube.com/embed/W1-wSw2tW_w?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W1-wSw2tW_w"
                  frameBorder="0"
                  allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}