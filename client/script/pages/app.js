var React = require("react"),
	RouteHandler = require("react-router").RouteHandler;

module.exports = React.createClass({
	render: function() {
		return <div>
			<RouteHandler />
		</div>;
	}
});