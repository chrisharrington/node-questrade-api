"use strict";

var React = require("react"),
	Tile = require("components/tile");

module.exports = React.createClass({
	sumPnls: function() {
		var quotes = this.props.quotes,
			sum = 0;
		
		for (var i = 0; i < quotes.length; i++)
			sum += quotes[i].pnl;
		
		return sum;
	},
	
	style: function() {
		return {
			marginBottom: "20px"
		};
	},
	
	render: function() {
		return <div className="container-fluid" style={this.style()}>
			<div className="row">
				<Tile>{"$" + this.sumPnls().toFixed(2)}</Tile>
			</div>
		</div>;
	}
});