def max_end3(nums):
    return [nums[0]] * 3 if nums[0] >= nums[-1] else [nums[-1]] * 3
# max_end3([1, 2, 3]) → [3, 3, 3]
# max_end3([11, 5, 9]) → [11, 11, 11]
# max_end3([2, 11, 3]) → [3, 3, 3]