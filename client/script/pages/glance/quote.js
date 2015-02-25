"use strict";

var React = require("react"),
	Tile = require("components/tile"),
	Money = require("components/money"),
	Change = require("components/change"),
	
	style = require("style/constants");

module.exports = React.createClass({
	getColourFromChange: function(change) {
		if (change === 0)
			return "grey";
		if (change < 0)
			return "#BF0000";
		if (change > 0)
			return "green";
	},
	
	render: function() {
		var data = this.props.data;
		return <div style={{ marginBottom: "12px" }}>
			<Tile indicator={this.getColourFromChange(data.change)}>
				<h2 style={{ marginBottom: style.spacing, float: "left" }}>{data.symbol}</h2>
				<div style={{ marginBottom: style.spacing, float: "right" }}>
					<Money value={data.currentPrice} />
					<br />
					<Change value={data.change} />
				</div>
				<div className="clearfix"></div>
								   
				<Table data={data} />
			</Tile>
		</div>;
	}
});

//change: -0.40131338927398286
//currentPrice: 27.3
//pnl: 43.94
//quantity: 50
//symbol: "XEF.TO"
//symbolId: 3607311
//yesterdayPrice: 27.41