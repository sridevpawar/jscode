function modifyArray(nums) {
    for (var i = 0; i < nums.length; i++){
        if (i % 2 === 0) {
            nums[i] *= 2; 
        } else {
            nums[i] *= 3;
        }
    }

    return nums;
}

var nums = [14, 25, 36, 47, 58, 69, 70, 81, 92];
console.log(modifyArray(nums));