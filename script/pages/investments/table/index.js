"use strict";

var React = require("react"),
	Row = require("./row");

module.exports = React.createClass({
	render: function() {
		var data = this.props.data;
		return <div className="row">
			<Row label="Current price" isMoney="true" value={data.currentPrice} />
			<Row label="Market value" isMoney="true" value={data.currentMarketValue} />
			<Row label="Total cost" isMoney="true" value={data.totalCost} />
			<Row label="PNL" isMoney="true" value={data.pnl} />
		</div>;
	}
});