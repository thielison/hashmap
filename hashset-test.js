import HashSet from "./hashset.js";

const test = new HashSet();

// Same bucket
test.set("grape");
test.set("hat");

test.set("dog");
test.set("lion");

// Different buckets
test.set("elephant");
test.set("frog");
test.set("ice cream");
test.set("jacket");
test.set("kite");
test.set("apple");
test.set("banana");
test.set("carrot");

// Extra = Uncomment to test the growing of buckets
test.set("moon");

// console.log(test.get("moon"));
// console.log(test.has("ice cream"));
// console.log(test.remove("moon"));
// console.log(test.keys());
// console.log(test.length());
// console.log(test.clear());
console.log(test);
console.log(test.getBucketAsString("moon"));
