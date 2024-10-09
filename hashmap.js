import LinkedList from "./linkedlist.js";

class HashMap {
    constructor(size = 16) {
        // Each bucket will be a Linked List to handle collisions independently
        this.buckets = Array.from({ length: size }, () => new LinkedList());
        this.loadFactor = 0.75;
        this.numberOfEntries = 0;
    }

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

        if (linkedList.contains(key)) {
            linkedList.update(key, value);
        } else {
            linkedList.append(key, value);

            this.numberOfEntries += 1;
        }
    }

    // Returns the string representation of the bucket (linked list) for the given key
    getBucketAsString(key) {
        const index = this.hash(key);
        const linkedList = this.buckets[index];
        const string = linkedList.toString();

        return string;
    }

    numberOfBuckets() {
        console.log(`Number of buckets: ${this.buckets.length}`);
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

test.numberOfBuckets();
console.log(test.getBucketAsString("dog"));
