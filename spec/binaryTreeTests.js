
(function () {
  'use strict';

  describe('Binary Trees have many methods', function () {

    describe('it should add children to the tree', function () {
        var tree = new BinaryTree(4); 
        tree.setLeft(2); 
        tree.setRight(8);
        tree.left.setRight(3); 
        tree.left.setLeft(1); 
        tree.right.setLeft(5)
        tree.right.setRight(6); 

      it('should add 0 to the left child of the root', function () {
         tree.left.left.setLeft(0);
         expect(tree.left.left.left.value).toBe(0);
      });

      it('should add 15 to the right child of the root', function () {
         tree.right.right.setRight(15); 
         expect(tree.right.right.right.value).toBe(15); 
      });

    });

    describe('it should count all the nodes on the tree', function () {
      var tree = new BinaryTree(4); 
      tree.setLeft(1); 
      tree.setRight(5);

      it('should return the number of nodes on the tree', function () {
        var nodes = tree.countNodes(); 
        expect(nodes).toBe(3);
      });

    });

    describe('it should have search methods', function () {
      var tree = new BinaryTree(5); 
      tree.setRight(10); 
      tree.setLeft(2); 
      tree.left.setRight(1); 
      tree.left.setLeft(0); 
      tree.right.setLeft(12); 
      tree.right.setRight(15); 

      it('should have a depth-first search method', function () {
        var treeVal = tree.DFSearch(16);
        expect(treeVal).toBe(false); 
      });

      it('should have a breadth-first search method', function () {
        var treeVal = tree.BFSearch(16); 
        expect(treeVal).toBe(false);
      });
      it('should test the BFS again', function () {
        var treeVal1 = tree.BFSearch(1); 
        expect(treeVal1).toBe(true);
      })

    });

     

  });
})();
