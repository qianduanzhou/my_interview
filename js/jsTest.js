var searchRange = function(nums, target) {
  const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1,res = -1;
    while(left <= right) {
      const mid = left + (right - left >> 1);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        res = mid;
      } else {
        left = mid + 1
      }
    }
    return res;
  }
  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false) - 1;
  return [left, right];
};
console.log(searchRange([5,7,7,8,8,10], 8));