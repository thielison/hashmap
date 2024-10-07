class HashMap {
    constructor(size = 16) {
        // Using a loop to ensure each sub-array is a unique reference
        this.buckets = Array.from({ length: size }, () => []);
        this.capacity = 0;
        this.loadFactor = 0.75;
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

        this.buckets[index].push({ key, value });
        this.capacity += 1;

        this.buckets[index].forEach((obj) => {
            console.log(obj.key);
        });
    }
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
