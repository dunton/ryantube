// video_detail.js
import React from 'react';

// {video} is the same as props.video
const VideoDetail = ({video}) => {

	if (!video) {
		return <div>Loading...</div>
	}

	const videoID = video.id.videoId;
	// these 2 url declarations are the same, backticks used to
	// refer to javascript variable inside string

	//const url = 'https://www.youtube.com/embed/' + videoID;
	const url = `https://www.youtube.com/embed/${videoID}`;


	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
};

export default VideoDetail;
