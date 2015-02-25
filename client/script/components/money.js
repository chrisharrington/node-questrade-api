"use strict";

var React = require("react");

module.exports = React.createClass({
	formatNumberToMoney: function() {
		var value = this.props.value;
		if (!value)
			return "";
		
		return "$" + value.toFixed(2);
	},
	
	render: function() {
		return <span style={{ fontWeight: "bold" }}>{this.formatNumberToMoney()}</span>;
	}
});