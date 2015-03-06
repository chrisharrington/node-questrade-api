"use strict";

var React = require("react"),
	Auth = require("auth"),
	Router = require("react-router"),
	style = require("style");

module.exports = React.createClass({
	mixins: [Router.Navigation],
	
	componentWillMount: function() {
		if (!Auth.isSignedIn())
			this.transitionTo("sign-in");
	},
	
	style: function() {
		var look = {
			paddingTop: style.constants.headerHeight + style.constants.spacing
		};
		for (var name in this.props.style)
			look[name] = this.props.style[name];
		return look;
	},
	
	render: function() {
		return <div style={this.style()} className="container">
			{this.props.children}
		</div>;	
	}
});