///////////////////////////////////////////////////////////////////////////////////////////////////////////
// A binary tree is a data structure where each node has at most two children, one left, and one right. //
/////////////////////////////////////////////////////////////////////////////////////////////////////////


var BinaryTree = function(val){
	this.value = val; 
	this.left = null; 
	this.right = null; 
}

BinaryTree.prototype.setLeft = function(val) {
	this.left = val; 
}

BinaryTree.prototype.setRight = function(val) {
	this.right = val; 
}

BinaryTree.prototype.BFSearch = function(val) {

}

BinaryTree.prototype.DFSearch = function(val) {
	
}

BinaryTree.prototype.countNodes = function(root) {
	if(root.left === null && root.right === null) {
		return 1
	}
	return countNodes(root.left) + countNodes(root.right) + 1; 
}

BinaryTree.prototype.subTrees = function(node, value) {

}

BinaryTree.prototype.inOrder = function(root) {

}

BinaryTree.prototype.postOrder = function(root) {

}

BinaryTree.prototype.preOrder = function(root) {

}