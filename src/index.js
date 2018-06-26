/*eslint-disable no-unused-vars*/ 
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = `AIzaSyACMf0dj07TJq7GSwQVrbxVsRHQeH5QLEU`;


// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: `surfboards`}, (videos) => {
      this.setState({ videos }); // only works if argument name === key name
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it in the DOM
ReactDom.render(<App />, document.querySelector(`.container`));
