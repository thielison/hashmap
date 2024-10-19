import HashMap from "./hashmap.js";

const test = new HashMap();

// Same bucket
test.set("grape", "purple");
test.set("hat", "black");

test.set("dog", "brown");
test.set("lion", "golden");

// Different buckets
test.set("elephant", "gray");
test.set("frog", "green");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

// Extra = Uncomment to test the growing of buckets
// test.set("moon", "silver");

// console.log(test.get("moon"));
// console.log(test.has("ice cream"));
// console.log(test.remove("moon"));
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// console.log(test.length());
// console.log(test.clear());
// console.log(test);
