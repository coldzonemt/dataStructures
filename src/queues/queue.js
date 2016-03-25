/////////////////////////////////////////////////
// A queue data structure: First in, first out //
/////////////////////////////////////////////////

var Queue = function() {
	this._storage = {}; 
	this._start = 0;
	this._end = 0;  
}

Queue.prototype.enqueue = function(value) {
	this._storage[this._end] = value
	this._end++;

}

Queue.prototype.dequeue = function() {
	var value = this._storage[this._start]
	delete this._storage[this._start]
	this._start ++;

	return value
}

Queue.prototype.size = function() {
	return this._end-this._start; 
}