function Fibonacci(len){
	let nums = [0, 1];
	for(let i = 1; i < len; i++){
		nums.push(nums[i] + nums[i-1]);
	}
	console.log(nums);
}
