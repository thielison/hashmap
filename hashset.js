import LinkedList from "./linkedlist.js";

class HashSet {
    constructor(size = 16) {
        // Each bucket will be a Linked List to handle collisions independently
        this.buckets = Array.from({ length: size }, () => new LinkedList());
        this.loadFactor = 0.75;
        this.numberOfEntries = 0;
    }

    // Takes a key and produces a hash code with it
    hash(key) {
        if (typeof key !== "string" || key.length === 0) {
            throw new Error("Invalid key or a key was not passed: A non-empty string key is required for hashing.");
        }

        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i += 1) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    // Doubles the number of buckets in the HashMap.
    // Copies existing entries to the new bucket array after clearing the current buckets
    resizeNumOfBuckets() {
        // Create a copy of all keys from the current buckets (linked lists) in the HashMap
        const keysCopy = this.keys();

        // Clear all linked lists inside the HashMap and reset the number of entries
        this.clear();

        // Double the size of the buckets array
        this.buckets = Array.from({ length: this.numberOfBuckets() * 2 }, () => new LinkedList());

        // Transfer all entries from the old buckets to the new buckets
        keysCopy.forEach((key) => {
            this.set(key);
        });
    }

    set(key) {
        const index = this.hash(key);
        const linkedList = this.buckets[index];

        // If a key already exists, then set(key) is ignored, since this same key is already in the set
        if (linkedList.contains(key)) {
            return;
        }
        // else, IF TWO DIFFERENT KEYS sit inside the same bucket, it is a collision,
        // and the new key will be appended to the end of the Linked List
        else {
            linkedList.append(key);

            this.numberOfEntries += 1;
        }

        // Determine when it is a good time to grow the number of buckets
        const result = this.numberOfBuckets() * this.loadFactor;

        // Returns the total number of entries (stored keys) in the hash map
        const numOfEntries = this.length();

        // If there are more entries in the hash map than the result
        if (numOfEntries > result) {
            // Double the number of buckets in the hash map
            this.resizeNumOfBuckets();
        }
    }

    // Returns a key. If a key is not found, return null.
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

    // Removes all entries in the hash map
    clear() {
        // Reset each bucket to a new LinkedList
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }

        // Reset the count of entries
        this.numberOfEntries = 0;
    }

    // Returns an array containing all the keys inside the hash map
    keys() {
        const arr = [];

        // Loop through each linked list (bucket) in the hash map
        for (const linkedList of this.buckets) {
            // Check if the linked list at this bucket is not empty
            if (linkedList.size() > 0) {
                const keys = linkedList.extractKeys();
                arr.push(keys);
            }
        }

        // arr.flat() flattens the nested arrays into a single array
        return arr.flat();
    }
}

export default HashSet;
