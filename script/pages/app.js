var React = require("react"),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	Header = require("components/header"),
	Auth = require("auth");

module.exports = React.createClass({
	mixins: [Router.Navigation],
	
	getInitialState: function() {
		return {
			signedIn: Auth.isSignedIn()
		}
	},
	
	componentWillMount: function() {
		Auth.onChange(function(signedIn) {
			this.setState({ signedIn: signedIn });
			this.forceUpdate();
		}.bind(this));
	},
	
	componentDidMount: function() {
		this.transitionTo(this.state.signedIn ? "investments" : "sign-in");
	},
	
	render: function() {
		return <div>
			<Header signedIn={this.state.signedIn} />
			<RouteHandler signedIn={this.state.signedIn} />
		</div>;
	}
});