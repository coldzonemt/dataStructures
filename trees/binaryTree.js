 /////////////////////////////////////////////////////////////////////////////////////////////////////////
// A binary tree is a data structure where each node has at most two children, one left, and one right. //
/////////////////////////////////////////////////////////////////////////////////////////////////////////


var binaryTree = function(val){
	this.value = val; 
	this.left = null; 
	this.right = null; 
}

binaryTree.prototype.setLeft(val) {
	this.left = val; 
}

binaryTree.prototype.setRight(val) {
	this.right = val; 
}

binaryTree.prototype.BFSearch(val) {

}

binaryTree.prototype.DFSearch(val) {
	
}