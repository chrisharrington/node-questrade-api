var React = require("react"),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	Header = require("components/header");

module.exports = React.createClass({
	mixins: [Router.Navigation],
	
	componentDidMount: function() {
		this.transitionTo("investments");	
	},
	
	render: function() {
		return <div>
			<Header />
			<RouteHandler />
		</div>;
	}
});