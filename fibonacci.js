//Fibonacci Sequence
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

    } console.error('The parameter needs to be larger than 0');
}
