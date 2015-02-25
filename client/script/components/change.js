"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		var value = this.props.value,
			symbol = value >= 0 ? "+" : "",
			color = value >= 0 ? "#3d9400" : "#dd4b39";
		return <span style={{ fontSize: "0.75em", float: "right", color: color }}>{symbol + value.toFixed(2)}%</span>;	
	}
});