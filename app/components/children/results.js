import React, {Component} from 'react';
import SearchResult from './grandchildren/searchResult.js';

class Results extends Component	{
	constructor(props){
		super(props);

		this.showResults = this.showResults.bind(this);
	}

	// componentDidUpdate(){
	// 	this.showResults();
	// }

	showResults(){
		if(this.props.res){
			console.log("Trying to show");
			return this.props.res.map((x, i) => <SearchResult key={i} title={x.headline.main} abstract={x.abs} link={x.web_url} saved={false}/>);
		}
		console.log("Nothing to show.");
		return "Nothing to show."
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">Results</h3>
  			  </div>
  			  <div className="panel-body">
    			<div id="searchResults" className="containter">
    				{this.showResults()}
    			</div>
  			  </div>
			</div>
		)
	}
}

module.exports = Results;