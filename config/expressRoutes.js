var path = require("path");
var Article = require("../models/Article");

module.exports = function(router) {
    router.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "/../views/index.html"));
    });

    router.post("/api/saved", function(req, res){
    	console.log(req.method);
	  	console.log(req.body);
    	Article.create({
    		title: req.body.title,
    		link: req.body.link,
    		lead_p: req.body.lead_p,
    		date: Date.now()

  		},  function(err) {

		    if (err) {
		      console.log("Error: " + err);
		    }
		    else {
		      console.log("Success");
		      res.send("Saved Search");
		    }
		});
	});
}