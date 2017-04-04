import React, {Component} from 'react';

class SearchResult extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">{this.props.title}</h3>
  			  </div>
  			  <div className="panel-body">
  			  	<p>{this.props.abstract}</p>
  			  	<p>{this.props.link}</p>
  			  </div>
			</div>
		)
	}
}

module.exports = SearchResult;