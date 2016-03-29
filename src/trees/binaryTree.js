///////////////////////////////////////////////////////////////////////////////////////////////////////////
// A binary tree is a data structure where each node has at most two children, one left, and one right. //
/////////////////////////////////////////////////////////////////////////////////////////////////////////


var BinaryTree = function(val){
	this.value = val; 
	this.left = null; 
	this.right = null; 
}

BinaryTree.prototype.setLeft = function(val) {
	this.left = new BinaryTree(val); 
}

BinaryTree.prototype.setRight = function(val) {
	this.right = new BinaryTree(val); 
}

BinaryTree.prototype.getLevel = function(node) {
	if(this.left === node || this.right === node) {
		return 1; 
	}
	return; 
	//return this.getLevel(node.right);
}

BinaryTree.prototype.DFSearch = function(val) {
	if(this.left === null && this.right === null) {
		return false; 
	}
	console.log(this.value);
	if(this.value === val) {
		return true; 
	} 

	if(this.left) {
		this.left.DFSearch(val); 
	}
	if(this.right) {
		this.right.DFSearch(val);
	}
}

BinaryTree.prototype.BFSearch = function(val) {
	
}

BinaryTree.prototype.countNodes = function() {
	if(this.left === null && this.right === null) {
		return 1
	}
	return this.left.countNodes() + this.right.countNodes() + 1; 
}

BinaryTree.prototype.inOrder = function() {
	if(this.left) {
		this.left.inOrder(); 
	}
	console.log(this.value);
	if(this.right) {
		this.right.inOrder(); 
	} 
}

BinaryTree.prototype.postOrder = function() {
	if(this.left) {
		this.left.inOrder(); 
	}
	if(this.right) {
		this.right.inOrder(); 
	}
	console.log(this.value);
}

BinaryTree.prototype.preOrder = function() {
	console.log(this.value); 
	if(this.left) {
		this.left.preOrder()
	}
	if(this.right) {
		this.right.preOrder(); 
	}
}

BinaryTree.prototype.leastCommonAncestor = function(node1, node2){

}

BinaryTree.prototype.subTrees = function(node, value) {

}
