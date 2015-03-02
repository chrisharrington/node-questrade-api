"use strict";

var React = require("react"),
	
	style = require("style/constants");

module.exports = React.createClass({
	style: function() {
		return {
			position: "fixed",
			padding: style.spacing,
			width: "100%",
			background: "black",
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
						footer
					</div>
				</div>
			</div>
		</div>;
	}
});