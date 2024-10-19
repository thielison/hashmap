# HashMaps and HashSets with Linked Lists

This project implements **HashMap** and **HashSet** data structures in JavaScript using **Linked Lists** to handle collisions.

## Features

### HashMap

-   Stores **key-value pairs**.
-   Handles collisions with **Linked Lists**.
-   Automatically resizes buckets when the load factor exceeds 0.75.
-   Methods:
    -   `set(key, value)` – Adds or updates key-value pairs.
    -   `get(key)` – Retrieves the value associated with a key.
    -   `has(key)` – Checks if a key exists.
    -   `remove(key)` – Deletes a key-value pair.
    -   `keys()`, `values()`, `entries()` – Extracts all keys, values, or key-value pairs.

### HashSet

-   Stores **unique keys only**.
-   Uses Linked Lists for collision handling and dynamic bucket resizing.
-   Methods:
    -   `set(key)` – Adds a key.
    -   `has(key)` – Checks if a key exists.
    -   `remove(key)` – Deletes a key.
    -   `keys()` – Retrieves all stored keys.

## Testing

You can run the tests for HashMap and HashSet by using the test files provided:

### HashMap Example

```javascript
import HashMap from "./hashmap.js";

const test = new HashMap();
test.set("apple", "red");
console.log(test.get("apple")); // Output: red
```

### HashSet Example

```javascript
import HashSet from "./hashset.js";

const test = new HashSet();
test.set("grape");
console.log(test.has("grape")); // Output: true
```
