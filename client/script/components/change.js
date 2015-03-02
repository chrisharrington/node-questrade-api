"use strict";

var React = require("react"),
	
	colors = require("style/colors");

module.exports = React.createClass({
	getColour: function(value) {
		if (value > 0)
			return colors.font.green;
		if (value > 0)
			return colors.font.red;
		return colors.font.grey;
	},
	
	render: function() {
		var value = this.props.value,
			symbol = value >= 0 ? "+" : "";
		
		return <span style={{ fontSize: "1em", fontWeight: "bold", float: "right", color: this.getColour(value) }}>{symbol + value.toFixed(2)}%</span>;	
	}
});