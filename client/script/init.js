var React = require("react"),
	
	Glance = require("./pages/glance");

var App = React.createClass({
	render: function() {
		return <div>
			<Glance />
		</div>;
	}
});

React.render(<App />, document.body);