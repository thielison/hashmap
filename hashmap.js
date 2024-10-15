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

    // Takes a key and returns true or false based on whether or not the key is in the hash map
    has(key) {
        const index = this.hash(key);

        // Throw an error if we try to access an out of bound index
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        const linkedList = this.buckets[index];

        return linkedList.contains(key);
    }

    // Takes a key and remove it from the hash map
    remove(key) {
        const index = this.hash(key);

        // Throw an error if we try to access an out of bound index
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        const linkedList = this.buckets[index];

        // If the given key is in the hash map, removes the entry and return true
        if (linkedList.contains(key)) {
            linkedList.remove(key);
            this.numberOfEntries -= 1;

            return true;
        }

        // If the key isn’t in the hash map, returns false
        return false;
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

    // Returns the number of stored keys in the hash map
    length() {
        return this.numberOfEntries;
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
console.log("Number of entries (key-value pairs): " + test.length());
