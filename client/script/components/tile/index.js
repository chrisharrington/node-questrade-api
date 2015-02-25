"use strict";

var React = require("react"),
	style = require("style/constants"),
	prefixify = require("style/prefixify");

module.exports = React.createClass({
	style: function() {
		return prefixify({
			width: "100%",
			background: "white",
			padding: style.spacing,
			boxSizing: "border-box",
			borderRadius: style.borderRadius,
			boxShadow: "0 2px 8px rgba(100, 100, 100, 0.4)",
			borderLeft: this.props.indicator ? ("solid 6px " + this.props.indicator) : "none"
		});
	},
	
	render: function() {
		return <div>
			<div className="tile" style={this.style()}>
				{this.props.children}
			</div>
		</div>;
	}
});