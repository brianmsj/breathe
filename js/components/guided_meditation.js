import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDiIUppadqo2kJs8NVYJpY0fYmZ4CV0EPU';

export default class GuidedMeditation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'guided meditation'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    return (
      <div>
        <h1 className="guided-meditation-title">guided meditation component</h1>
      </div>
    )
  }
}