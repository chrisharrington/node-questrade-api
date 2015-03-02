var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	App = require("./pages/app"),
	Banks = require("./pages/banks"),
	Investments = require("./pages/investments");

var routes = (
	<Route handler={App} path="/">
		<DefaultRoute handler={Banks} />
		<Route name="banks" path="banks" handler={Banks} />
		<Route name="investments" path="investments" handler={Investments} />
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.body);
});