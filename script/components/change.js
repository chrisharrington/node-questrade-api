"use strict";

var React = require("react"),
	
	colours = require("style/colours");

module.exports = React.createClass({
	getColour: function(value) {
		if (value > 0)
			return colours.font.green;
		if (value < 0)
			return colours.font.red;
		return colours.font.grey;
	},
	
	render: function() {
		var value = this.props.value,
			symbol = value >= 0 ? "+" : "";
		
		return <span style={{ fontSize: "1em", fontWeight: "bold", float: "right", color: this.getColour(value) }}>{symbol + value.toFixed(2)}%</span>;	
	}
});