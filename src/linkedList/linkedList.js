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

LinkedList.prototype.reverse = function() {
	var node = this.head; 
	var prev = null; 
	var temp; 
	while(node) {
		temp = node.next; 
		node.next = prev; 
		prev = node; 
		node = temp; 
	}

	return prev;
}

LinkedList.prototype.reverseList = function() {
	
}

var Node = function(value) { 
	this.value = value; 
	this.next = null; 
}

//if there is a corrupt list, you can use the "tortise" and the "hare" pointers to 
//determine the length of the cycle
LinkedList.prototype.getCycle = function() {
  var pointer1 = this.head.next; 
  var pointer2 = pointer1.next;
  var counter = 0; 
  
  while(pointer1 !== pointer2) {
    pointer1 = pointer1.next; 
    pointer2 = pointer2.next.next; 
  }
  
  if(pointer1 === pointer2) {
    pointer1 = node; 
  }
  
  while(pointer1 !== pointer2) {
    pointer1 = pointer1.next; 
    pointer2 = pointer2.next.next; 
  }
  
  if(pointer1 === pointer2) {
    while(pointer1 !== pointer2) {
      pointer2 = pointer2.next; 
      counter++; 
    }
  }

  return counter; 
}