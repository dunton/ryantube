// search_bar.js
import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		// ONLY USE THIS.STATE = IN THE CONSTRUCTOR
		// OTHERWISE WE USE this.setState
		this.state = { term: '' };
	}

	render () {
		return ( 
			<div className="search-bar">
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search Youtube..."
					 />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	
}

export default SearchBar;