"use strict";

var React = require("react"),
	Radium = require("radium"),
	
	colours = require("style/colours");

module.exports = React.createClass({
	mixins: [Radium.StyleResolverMixin, Radium.BrowserStateMixin],
	
	style: function() {
		return this.buildStyles({
			padding: "8px",
			boxSizing: "border-box",
			fontSize: "1em",
			border: "solid 1px " + colours.border.default,
			color: "black",
			outline: "none !important",
			fontFamily: "Open Sans",
			
			states: [{
				focus: {
					border: "solid 1px " + colours.border.focus	
				}
			}]
		});
	},
	
	render: function() {
		return <input onChange={this.onChange} {...this.getBrowserStateEvents()} className={this.props.className} type={this.props.isPassword ? "password" : "text"} style={this.style()} placeholder={this.props.placeholder} />
	},
	
	onChange: function(e) {
		if (this.props.onChange)
			this.props.onChange(this.props.name, e.currentTarget.value);	
	}
});