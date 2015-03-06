"use strict";

var React = require("react"),
	Page = require("../base"),
	Auth = require("auth/mixin"),
	
	BusinessInvestments = require("data/business-investments"),
	
	Quote = require("./quote"),
	Footer = require("./footer"),
	
	style = require("style");

module.exports = React.createClass({
	mixins: [Auth],
	
	getInitialState: function() {
		return {
			loading: true,
			quotes: []
		};
	},
	
	componentDidMount: function() {
		if (this.isSignedIn())
			this.getBusinessInvestments();	
	},
	
	getBusinessInvestments: function() {
		this.setState({ loading: true });
		BusinessInvestments.get().then(function(quotes) {
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
		
		return <Page style={{ paddingBottom: style.constants.spacing + style.constants.headerHeight }}>
			<div className="row">{quotes}</div>
			<Footer quotes={this.state.quotes} />
		</Page>;
	}
});