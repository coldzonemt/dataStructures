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
	var temp = this; 
	var stack = [temp]; 
	while(stack.length > 0) {
		console.log("DFS:", temp.value);
		if(temp.value === val) {
			return true; 
		} else {
			temp = stack.pop(); 
			if(temp.right) {
				stack.push(temp.right);
			}
			if(temp.left) {
				stack.push(temp.left);
			}
		}
 	}
 	return false; 
}

BinaryTree.prototype.BFSearch = function(val) {
	var temp = this; 
	var queue = [temp];
	while(queue.length > 0) {
		//console.log("BFS:", temp.value)
		if(temp.value === val) {
			return true; 
		} else {
			temp = queue.shift(); 
			if(temp.left) {
				queue.push(temp.left);
			}
			if(temp.right) {
				queue.push(temp.right);
			}
		}
	}
	return false; 
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
