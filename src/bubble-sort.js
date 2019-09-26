// Test input
let input = [2,9,2,4,2,9,8,3,7,8,2,1,2,3,9,4,7,5,2,8,1,0];

// Sort an array from smallest to largest number.
function bubbleSort(input) {
	// Copy the input array so that the input array
  // is not mutated.
	let output = [...input];
  
	// For the right-most number that needs sorting.  
  for(let x = output.length - 1; x > 0; x--) {
  	// Compare the right-most number that needs sorting to the next number.
    for (let i = output.length - 1; i > 0; i--) {
    	// 
      let current = output[i];
      let next = output[i - 1];
			// If the right-most number that needs sorting
      // is smaller than the next left number
      // swap their positions.
      if (current < next) {
        output[i] = next;
        output[i-1] = current;
      }
      // If the right-most number that needs sorting
      // is bigger thanthe next left number
      // stop sorting number. 
      continue;
    }
  }
  
	// Return the sorted array.
  return output;
}

// Test the sort method.
console.log(bubbleSort(input));