Number.prototype.map = function(startMin, startMax, endMin, endMax) {
	return endMin + (endMax - endMin) * ((this - startMin) / (startMax - startMin));
};

Number.prototype.limit = function(min, max) {
	return Math.min(max, Math.max(min, this));
};