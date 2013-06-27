/*---------------------
	:: AwesomeThings
	-> controller
---------------------*/
var AwesomeThingsController = {
	index: function(req,res){
		AwesomeThing.findAll().done(function(err, things){
			res.json(things);
		});
	}
};
module.exports = AwesomeThingsController;