//Code: andrewfurey21

//Fibonacci Sequence
//You can run this in the console right now!


function Fibonacci(len){
	if (len > 0){
		let nums = [0, 1];
	
		if (len > 2){
			//len - 1 so that is is the specified length
			for(let i = 1; i < len - 1; i++){
				nums.push(nums[i] + nums[i-1]);
			}
    	} else {
			if (len === 1){
				nums = [0];
            }
    	}
		//returns the sequence (array)
		return nums
		console.log(nums);

      //added error handling		
    } else	{
		console.error('The parameter needs to be larger than 0');
	}
}


numbers = Fibonacci(10);
console.log(numbers);

/* Expected Output

0: 0
1: 1
2: 1
3: 2
4: 3
5: 5
6: 8
7: 13
8: 21
9: 34


*/


function specifyFibonacci(pos){
	if (pos >= 0){
		let nums = [0, 1];
	
		
			//len - 1 so that is is the specified length
			for(let i = 1; i < pos + 1; i++){
				nums.push(nums[i] + nums[i-1]);
			}
    	 

		//returns the sequence (array)
		return nums[pos]
		console.log(nums[pos]);

		}	else {

		console.error('The parameter needs to be greater or equal to 0');

        }
}

let number_10 = specifyFibonacci(10);

/* Expected Output:

55


