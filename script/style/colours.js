var Colour = require("color");

var primary = "#2875C7";

module.exports = {
	font: {
		green: "#259C25",
		red: "#CF4646",
		grey: "#AAA"
	},
	
	border: {
		default: "#DDDDDD",
		focus: Colour(primary).lighten(0.6).hexString()
	},
	
	solid: {
		green: "#259C25",
		red: "#AD3434",
		grey: "#AAA",
		
		primary: {
			default: primary,
			hover: Colour(primary).lighten(0.2).hexString(),
			active: Colour(primary).darken(0.2).hexString()
		},
		
		header: {
			top: "#2875C7",
			bottom: "#2875C7",
			
			activeTop: "#617CC7",
			activeBottom: "#445A97"
		},
		
		footer: {
			top: "#444444",
			bottom: "#222222"
		}
	}
};