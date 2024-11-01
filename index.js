const add = (nums) => {
  if (nums === "") return 0;
  if (nums.length === 1) return parseInt(nums[0]);

  let delimiter = /[\n,]/;
  if (nums.startsWith("//")) {
    const delimiterLine = nums.split("\n")[0];
    delimiter = new RegExp(delimiterLine[2]);
    nums = nums.slice(delimiterLine.length + 1);
  }

  const numsbers = nums.split(delimiter).map(Number);
  const negatives = numsbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    return -1;
  }

  return numsbers.reduce((sum, num) => sum + num, 0);
};

const runTest = () => {
  // Test 1: Empty string returns 0
  if (add("") !== 0) {
    console.log("Test 1 Failed: Expected 0 for empty string");
    return;
  }

  //   Test 2: Single number returns the number itself
  if (add("1") !== 1) {
    console.log("Test 2 Failed: Expected 1 for input '1'");
    return;
  }

  // Test 3 Failed: Two numbers, comma-separated
  if (add("1,2") !== 3) {
    console.log("Test 3 Failed: Two numbers, comma-separated");
    return;
  }

  // Test 4: Multiple numbers, comma-separated
  if (add("1,2,3,4") !== 10) {
    console.log("Test 4 Failed: Expected 10 for input '1,2,3,4'");
    return;
  }

  // Test 5: Newline as a delimiter
  if (add("1\n2,3") !== 6) {
    console.log("Test 5 Failed: Expected 6 for input '1\\n2,3'");
    return;
  }

  // Test 6: Custom delimiter
  if (add("//;\n1;2;3") !== 6) {
    console.log("Test 5 Failed: Expected 6 for input '1\\n2,3'");
    return;
  }

  // Test 7: Negative numbers should throw an error
  if (add("1,-2, 3") === -1) {
    console.log("Test 7 Failed: negative numbers not allowed");
    return;
  }

  console.log("All tests completed.");
};

runTest();
