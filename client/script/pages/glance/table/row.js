"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		var value = this.props.value;
		return <div className="col-xs-12">
			<div style={{ float: "left", width: "100%", marginTop: "6px", fontSize: "0.85em" }}>
				<span style={{ float: "left", color: "#999" }}>{this.props.label}</span>
				<span style={{ float: "right", fontWeight: "bold", color: "#555" }}>{this.props.isMoney ? ("$" + value.toFixed(2)) : value}</span>
			</div>
		</div>;
	}
});