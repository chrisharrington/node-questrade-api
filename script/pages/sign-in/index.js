"use strict";

var React = require("react"),
	Radium = require("radium"),
	
	Page = require("pages/base"),
	Tile = require("components/tile"),
	Button = require("components/input/button"),
	Text = require("components/input/text"),
	
	colours = require("style/colours");

module.exports = React.createClass({
	mixins: [Radium.StyleResolverMixin],
	
	getInitialState: function() {
		return {
			email: "",
			password: ""
		};
	},
	
	style: function() {
		return this.buildStyles({
			margin: "auto",
			width: 400
		});
	},
	
	render: function() {
		return <Page>
			<Tile style={this.style()}>
				<h1 className="spacing-bottom-10">Sign In</h1>
				<Text className="full-width spacing-top-10" placeholder="Email address..." name="email" onChange={this.onChange} />
				<Text className="full-width spacing-top-10" placeholder="Password..." isPassword={true} name="password" onChange={this.onChange} />
				<Button className="full-width spacing-top-10" onClick={this.onSubmit}>Sign In</Button>
			</Tile>
		</Page>;
	},
	
	onChange: function(name, value) {
		var state = {};
		state[name] = value;
		this.setState(state);
	},
	
	onSubmit: function() {
		console.log(this.state);
	}
});