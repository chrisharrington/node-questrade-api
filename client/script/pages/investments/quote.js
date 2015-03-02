"use strict";

var React = require("react"),
	Tile = require("components/tile"),
	Money = require("components/money"),
	Change = require("components/change"),
	Table = require("./table"),
	
	style = require("style/constants"),
	colors = require("style/colors");

module.exports = React.createClass({
	render: function() {
		var data = this.props.data;
		return <div style={{ marginBottom: "12px" }}>
			<Tile>
				<div className="row">
					<div className="col-xs-12">
						<h2 className="pull-left spacing-bottom-12">{data.symbol}</h2>
						<div className="pull-right">
							<Change value={data.change} />   
						</div>
					</div>
				</div>	   
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