import LinkedList from "./linkedlist.js";

class HashMap {
    constructor(size = 16) {
        // Each bucket will be a Linked List to handle collisions independently
        this.buckets = Array.from({ length: size }, () => new LinkedList());
        this.loadFactor = 0.75;
        this.numberOfEntries = 0;
    }

    // Takes a key and produces a hash code with it
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i += 1) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const linkedList = this.buckets[index];

        // If a key already exists, then the old value is overwritten
        // or we can say that we update the key’s value
        if (linkedList.contains(key)) {
            linkedList.update(key, value);
        }
        // else, TWO DIFFERENT KEYS sit inside the same bucket, it is a collision,
        // and the new key-value will be appended to the end of the Linked List
        else {
            linkedList.append(key, value);

            this.numberOfEntries += 1;
        }
    }

    // Returns a value that is assigned to a key. If a key is not found, return null.
    get(key) {
        const index = this.hash(key);

        // Throw an error if we try to access an out of bound index
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        const linkedList = this.buckets[index];
        const value = linkedList.find(key);

        return value;
    }

    // Returns the string representation of the bucket (linked list) for the given key
    getBucketAsString(key) {
        const index = this.hash(key);

        // Throw an error if we try to access an out of bound index
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        const linkedList = this.buckets[index];
        const string = linkedList.toString();

        return string;
    }

    numberOfBuckets() {
        return this.buckets.length;
    }
}

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

console.log(test);
console.log(`Number of buckets: ${test.numberOfBuckets()}`);
console.log(test.getBucketAsString("dog"));
console.log(test.get("grape"));
