"use strict";

var React = require("react"),
	
	style = require("style");

module.exports = React.createClass({
	componentDidMount: function() {
			
	},
	
	style: function() {
		return {
			paddingTop: style.constants.headerHeight + style.constants.spacing
		}
	},
	
	render: function() {
		return <div style={this.style()} className="container">
			{this.props.children}
		</div>;	
	}
});