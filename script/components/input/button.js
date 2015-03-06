"use strict";

var React = require("react"),
	Radium = require("radium"),
	
	colours = require("style/colours");

module.exports = React.createClass({
	mixins: [Radium.StyleResolverMixin, Radium.BrowserStateMixin],
	
	style: function() {
		return this.buildStyles({
			backgroundColor: colours.solid.primary.default,
			borderRadius: 3,
			color: "white",
			paddingTop: 8,
			paddingBottom: 8,
			border: "none",
			outline: "none !important",
			fontSize: "1em",
			boxShadow: "0 2px 8px rgba(100, 100, 100, 0.4)",
			cursor: "pointer",
			
			states: [{
				active: {
					boxShadow: "none"	
				}
			}]
		});
	},
	
	render: function() {
		return <button onClick={this.props.onClick} {...this.getBrowserStateEvents()} className={this.props.className} style={this.style()}>{this.props.children}</button>;	
	}
});