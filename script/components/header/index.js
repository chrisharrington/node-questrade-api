"use strict";

var React = require("react"),
	Style = require("style/style"),
	style = require("style");

module.exports = React.createClass({
	style: function() {
		return new Style({
			position: "fixed",
			top: 0,
			left: 0,
			zIndex: 2,
			width: "100%",
			background: "linear-gradient(to bottom, " + style.colours.solid.header.top + ", " + style.colours.solid.header.bottom + ")",
			color: "#DDD",
			height: style.constants.headerHeight,
			boxShadow: "0 2px 8px rgba(100, 100, 100, 0.4)"
		});
	},
	
	listItemStyle: function(location) {
		var look = new Style({
			float: "left",
			height: style.constants.headerHeight,
			lineHeight: style.constants.headerHeight + "px",
			display: "inline-block",
			verticalAlign: "middle",
			padding: "0 18px",
			cursor: "pointer"
		});
		if (location === window.location.hash) {
			look.color = "white";
			look.background = "linear-gradient(to bottom, " + style.colours.solid.header.activeTop + ", " + style.colours.solid.header.activeBottom + ")";
		}
		return look;
	},
	
	navigate: function(hash) {
		window.location.hash = hash;
		this.forceUpdate();
	},
	
	render: function() {
		return <div style={this.style()}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12" style={{ height: style.constants.headerHeight, lineHeight: style.constants.headerHeight + "px", display: "inline-block", verticalAlign: "middle" }}>
						<ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
							<li style={this.listItemStyle("#/investments")} onClick={this.navigate.bind(this, "/investments")}>Investments</li>
							<li style={this.listItemStyle("#/bank-accounts")} onClick={this.navigate.bind(this, "/bank-accounts")}>Bank Accounts</li>
						</ul>
					</div>
				</div>
			</div>
		</div>;	
	}
});