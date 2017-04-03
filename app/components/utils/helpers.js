import 'whatwg-fetch';

var helper = {

  fetchData: function(query, startDate, endDate){

  	return new Promise(function(resolve, reject){
	   	fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=03bd6e08080c49abb537789a5664226c&q=${query}&begin_date=${startDate}&end_date=${endDate}`)
	      .then(response => response.json())
	      .then((responseData) => {
	        resolve(responseData.response.docs);
	      })
	      .catch(err => console.log(err));
  	});
  }

};

module.exports = helper;