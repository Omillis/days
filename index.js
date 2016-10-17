'use strict';
const hours = require('@saadshahd/hours');

module.exports = function (number) {
	return number * hours(24);
};
