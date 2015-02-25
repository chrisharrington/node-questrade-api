"use strict";

var React = require("react"),
	Row = require("./row");

module.exports = React.createClass({
	render: function() {
		var data = this.props.data;
		return <div className="row">
			<Row label="Market value" value={data.currentMarketValue} />
			<Row label="Total cost" value={data.totalCost} />
		</div>;
	}
});