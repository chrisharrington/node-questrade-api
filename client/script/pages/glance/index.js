"use strict";

var React = require("react"),
	
	Glance = require("data/glance"),
	
	Quote = require("./quote");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loading: true,
			quotes: []
		};
	},
	
	componentWillMount: function() {
		this.getGlance();	
	},
	
	getGlance: function() {
		this.setState({ loading: true });
		Glance.get().then(function(quotes) {
			this.setState({ quotes: quotes });
		}.bind(this)).complete(function() {
			this.setState({ loading: false });	
		}.bind(this));
	},
	
	render: function() {
		var quotes = this.state.quotes.map(function(quote) {
			return <div className="col-sm-6 col-md-6 col-lg-4">
				<Quote data={quote} />
			</div>;
		}.bind(this));
		
		return <div className="container">
			<div className="row">{quotes}</div>
		</div>;
	}
});