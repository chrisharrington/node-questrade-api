var mixins = {
	borderRadius: ["borderRadius", "MozBorderRadius", "WebkitBorderRadius"],
	boxSizing: ["boxSizing", "MozBoxSizing", "WebkitBoxSizing"]
};

module.exports = function(props) {
	for (var name in prefixify(props))
		this[name] = props[name];
};

function prefixify(style) {
	for (var prop in style)
		style = replace(style, prop);
	return style;
};

function replace(style, prop) {
	var list = mixins[prop];
	if (!list)
		return style;
	
	var value = style[prop];
	for (var i = 0; i < list.length; i++)
		style[list[i]] = value;
	
	return style;
}