 /////////////////////////////////////////////////////////////////////////////////////////////////
// A linked list data structure is a dynamic strucutre that allows for constant time insertion //
/////////////////////////////////////////////////////////////////////////////////////////////////

var LinkedList = function() {
	this.head = null; 
	this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
	
	var newTail = new Node(value); 

	if(!this.head) {
		this.head = newTail; 
	} 
	if (this.tail) {
		this.tail.next = newTail;
	}

	this.tail = newTail;  
}

LinkedList.prototype.removeHead = function() {
	if (this.head === null) {
		return null; 
	}

	var removedHead = this.head;
	delete this.head; 

	this.head = removedHead.next;

	return removedHead; 
}

LinkedList.prototype.contains = function(value) {
	var node = this.head; 

	while(node){
		if(node.value === value) {
			return true; 
		} 
		node = node.next; 
	}
	
	return false; 
}

var Node = function(value) { 
	this.value = value; 
	this.next = null; 
}