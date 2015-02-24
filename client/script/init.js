var React = require("react"),
	
	Positions = require("./pages/positions");

var App = React.createClass({
	render: function() {
		return <div>
			<Positions />
		</div>;
	}
});

React.render(<App />, document.body);