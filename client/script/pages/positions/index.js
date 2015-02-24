"use strict";

var React = require("react"),
	
	Positions = require("data/positions");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loading: true	
		};
	},
	
	componentWillMount: function() {
		this.getPositions();
	},
	
	getPositions: function() {
		this.setState({ loading: true });
		Positions.get().then(function(positions) {
			this.setState({ positions: positions });
		}.bind(this)).complete(function() {
			this.setState({ loading: false });	
		}.bind(this));
	},
	
	render: function() {
		return <div>positions</div>;	
	}
});