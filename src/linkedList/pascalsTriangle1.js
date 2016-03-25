/*
Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

for example:

pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

          [1]
        [1   1]
       [1  2  1]
      [1  3  3  1]
here you get the 3 by adding the 2 and 1 above it.

*/

function pascal(depth) {
	var result = [];
	var row = []; 
	var newRow = [1];
	var counter = 1; 
    result.push(newRow);
    
    if(depth === 1) {
      return result; 
    }
  
    depth--;
	while(depth) {
		//MUST reset both row and newRow
		row = newRow; 
		newRow = [];
		//newRow will always have the length of the depth of the triangle 
		for(i=0; i<counter; i++) {
		    if(i===0){
		        newRow.push(1); 
		    } else {
		        newRow.push(row[i-1]+row[i]);
		    }
		}
		//The row will always end with 1
		newRow.push(1);
		result.push(newRow);
		counter++;
		depth--;
	} 
	return result;
}