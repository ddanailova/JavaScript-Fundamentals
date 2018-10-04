function calc([num1, num2, num3]) {
    console.log(Math.max(num1, num2, num3));
}


calc([5, -2, 7]);

(nums => console.log(Math.max(nums[0],nums[1], nums[2])))([11, 5 , 2]);

let pesho = (nums) => console.log(Math.max(nums[0],nums[1], nums[2]));

pesho([11, 25 , 2]);