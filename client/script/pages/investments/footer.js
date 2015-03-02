"use strict";

var React = require("react"),
	Money = require("components/money"),
	Style = require("style/style"),
	style = require("style"),
	moment = require("moment");

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
			padding: "0 " + style.constants.spacing + "px",
			width: "100%",
			background: "linear-gradient(to bottom, " + style.colours.solid.footer.top + ", " + style.colours.solid.footer.bottom + ")",
			color: "white",
			bottom: 0,
			left: 0
		};
	},
	
	innerStyle: function() {
		return {
			height: style.constants.headerHeight,
			lineHeight: style.constants.headerHeight + "px",
			verticalAlign: "middle",
			display: "inline-block",
			width: "100%"
		};
	},
	
	render: function() {
		return <div style={this.style()}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div style={this.innerStyle()}>
							<span className="pull-left" style={{ color: "#AAA", fontSize: "0.75em" }}>{moment().format("YYYY-MM-DD hh:mm:ss a")}</span>
							<div className="pull-right">
								<span style={{ color: "#AAA", textAlign: "right" }}>Total:</span>
								<span style={{ color: "white", marginLeft: style.constants.spacing }}>
									<Money value={this.sumPnls()} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
});