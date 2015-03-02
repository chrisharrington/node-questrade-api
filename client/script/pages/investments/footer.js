"use strict";

var React = require("react"),
	Money = require("components/money"),
	Style = require("style/style"),
	style = require("style");

module.exports = React.createClass({
	sumPnls: function() {
		var sum = 0;
		for (var i = 0; i < this.props.quotes.length; i++)
			sum += this.props.quotes[i].pnl;
		return sum;
	},
	
	style: function() {
		return {
			position: "fixed",
			padding: style.constants.spacing,
			width: "100%",
			background: "linear-gradient(to bottom, " + style.colours.solid.footer.top + ", " + style.colours.solid.footer.bottom + ")",
			color: "white",
			bottom: 0,
			left: 0
		};
	},
	
	render: function() {
		return <div style={this.style()}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<span className="pull-left"></span>
						<div className="pull-right">
							<span style={{ color: "#AAA", textAlign: "right" }}>Total:</span>
							<div style={{ color: "white" }}>
								<Money value={this.sumPnls()} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
});