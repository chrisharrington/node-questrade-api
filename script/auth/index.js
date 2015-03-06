"use strict";

module.exports = new function() {
	this._callbacks = [];
	
	this.onChange = function(callback) {
		this._callbacks.push(callback);
	};
	
	this.isSignedIn = function() {
		return false;	
	};
};