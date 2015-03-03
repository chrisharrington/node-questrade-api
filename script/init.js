var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	App = require("./pages/app"),
	BankAccounts = require("./pages/bank-accounts"),
	Investments = require("./pages/investments");

var routes = (
	<Route handler={App} path="/">
		<Route name="bank-accounts" path="bank-accounts" handler={BankAccounts} />
		<Route name="investments" path="investments" handler={Investments} />
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.body);
});