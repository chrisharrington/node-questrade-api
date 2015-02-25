"use strict";

var get = require("../base/get");

module.exports = function(accountNumber) {
	return getPositions(accountNumber).then(function(positions) {
		return addQuoteInformation(positions);
	});
};

function getPositions(accountNumber) {
	return get("/v1/accounts/" + accountNumber + "/positions").then(function(positions) {
		return positions.positions.map(function(position) {
			return {
				symbolId: position.symbolId,
				symbol: position.symbol,
				quantity: position.closedQuantity === 0 ? position.openQuantity : position.closedQuantity,
				pnl: position.closedPnl === 0 ? position.openPnl : position.closedPnl,
				currentPrice: position.currentPrice,
				currentMarketValue: position.currentMarketValue,
				totalCost: position.totalCost
			};
		});
	});
};

function addQuoteInformation(positions) {
	var symbolIds = positions.map(function(position) {
		return position.symbolId;
	}).join(",");
	
	return get("/v1/symbols?ids=" + symbolIds).then(function(quotes) {
		quotes = toSymbolDictionary(quotes.symbols);
		for (var i = 0; i < positions.length; i++) {
			var quote = quotes[positions[i].symbol];
			positions[i].yesterdayPrice = quote.prevDayClosePrice;
			positions[i].change = (positions[i].currentPrice / positions[i].yesterdayPrice - 1) * 100;
		}
		return positions;
	});
};

function toSymbolDictionary(quotes) {
	var dict = {};
	for (var i = 0; i < quotes.length; i++)
		dict[quotes[i].symbol] = quotes[i];
	return dict;
};