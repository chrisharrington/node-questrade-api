"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className="col-xs-12 table">
			<div>
				<span className="table-label">{this.props.label}</span>
				<span className="table-value">{this.props.value}</span>
			</div>
		</div>;
	}
});