"use strict";

var React = require("react"),
	
	style = require("style");

module.exports = React.createClass({
	componentDidMount: function() {
			
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