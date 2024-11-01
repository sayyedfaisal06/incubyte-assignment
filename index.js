const add = (nums) => {
  if (nums === "") return 0;
  if (nums.length === 1) return parseInt(nums[0]);

  return 0;
};

const runTest = () => {
  // Test 1: Empty string returns 0
  if (add("") !== 0) {
    console.log("Test 1 Failed: Expected 0 for empty string");
  }

  //   Test 2: Single number returns the number itself
  if (add("1") !== 1) {
    console.log("Test 2 Failed: Expected 1 for input '1'");
  }
};

runTest();
