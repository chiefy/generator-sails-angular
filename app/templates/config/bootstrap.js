// App bootstrap
// Code to run before launching the app
//
// Make sure you call cb() when you're finished.
module.exports.bootstrap = function (cb) {

	AwesomeThing.create({
		name: 'AngularJS'
	},function() {
		AwesomeThing.create({
			name: 'HTML5 Boilerplate'
		}, function() {
			AwesomeThing.create({
				name: 'Karma'
			}, function() {
				AwesomeThing.create({
					name: 'SailsJS'
				}, function() {
					AwesomeThing.create({
						name: 'Bootstrap'
					},cb);
				});
			});
		});
	});

};