module.exports.session = {

	// Session secret is automatically generated when your new app is created
	// It can be easily replaced here:
	secret: 'mybolognahasafirstnameitsd-o-p-e',

	// Uncomment the following lines to use your Mongo adapter as a session store
	// Information about setting up a Mongo adapter can be found here: https://github.com/balderdashy/sails-mongo
	// adapter: 'mongo',
	// url: require('./adapters').adapters.mongo.url

	// In production, uncomment the following lines to set up a shared redis session store
	// that can be shared across multiple Sails.js servers
	// adapter: 'redis'

	// By default, the local redis instance will be used on the default port
	// You can use the following config to override those settings
	// host: 'localhost',
	// port: 8888

};
