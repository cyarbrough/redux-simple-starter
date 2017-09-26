import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  /**
   * Render
   */
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
