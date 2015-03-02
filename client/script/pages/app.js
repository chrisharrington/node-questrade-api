var React = require("react"),
	RouteHandler = require("react-router").RouteHandler,
	Header = require("components/header");

module.exports = React.createClass({
	render: function() {
		return <div>
			<Header />
			<RouteHandler />
		</div>;
	}
});