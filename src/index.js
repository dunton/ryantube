import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCcy0wvGBs7VRZYtjZmtDOoWRr-qjHcO54';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('the office')
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//this.setState({ videos: videos}); is the same as below use 
			// when key/value are the same
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render(){
		// throttle user input
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


		return (
			<div> 
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector(".container"));