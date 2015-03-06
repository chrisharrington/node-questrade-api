"use strict";

var React = require("react"),
	constants = require("style/constants"),
	Style = require("style/style");

module.exports = React.createClass({
	style: function() {
		return new Style({
			width: "100%",
			background: "white",
			padding: constants.spacing,
			boxSizing: "border-box",
			borderRadius: constants.borderRadius,
			boxShadow: "0 2px 8px rgba(100, 100, 100, 0.4)",
			borderLeft: this.props.indicator ? ("solid 6px " + this.props.indicator) : "none"
		});
	},
	
	render: function() {
		return <div style={this.props.style}>
			<div className="tile" style={this.style()}>
				{this.props.children}
			</div>
		</div>;
	}
});