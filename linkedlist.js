class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.listSize = 0;
    }

    // Append a new node to the Linked List
    append(key, value) {
        const node = new Node(key, value);

        // If the list is empty, this new node will be set as the head of the Linked List
        if (!this.head) {
            this.head = node;
        } else {
            // Traverse to the end of the list
            let current = this.head;

            while (current.nextNode) {
                current = current.nextNode;
            }

            // Append the new node at the end of the list
            current.nextNode = node;
        }

        this.listSize += 1;
    }

    // Update the value of the corresponding node
    update(key, value) {
        let current = this.head;

        // Traverse the list to find the node with the matching key
        while (current) {
            if (current.key === key) {
                // Update the value of the existing node
                current.value = value;
            }

            current = current.nextNode;
        }
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(key) {
        let current = this.head;

        while (current) {
            if (current.key === key) {
                return true;
            }

            current = current.nextNode;
        }

        return false;
    }

    // Returns a value that is assigned to a key
    find(key) {
        let current = this.head;

        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.nextNode;
        }

        // If a key is not found, return null
        return null;
    }

    // Returns an array containing all the keys inside this linked list
    extractKeys() {
        if (!this.head || this.listSize === 0) {
            return;
        }

        let current = this.head;
        let arrayOfKeys = [];

        while (current) {
            arrayOfKeys.push(current.key);
            current = current.nextNode;
        }

        return arrayOfKeys;
    }

    // Returns an array containing all the values inside this linked list
    extractValues() {
        if (!this.head || this.listSize === 0) {
            return;
        }

        let current = this.head;
        let arrayOfValues = [];

        while (current) {
            arrayOfValues.push(current.value);
            current = current.nextNode;
        }

        return arrayOfValues;
    }

    extractKeyValuePairs() {
        if (!this.head || this.listSize === 0) {
            return;
        }

        let current = this.head;
        const arr = [];

        while (current) {
            arr.push([current.key, current.value]);
            current = current.nextNode;
        }

        return arr;
    }

    // Removes a node with the given key from the linked list
    remove(key) {
        let current = this.head;
        // 'previous' tracks the node before 'current'; starts as null since the head has no previous node
        let previous = null;

        // Traverse the list until the node with the matching key is found, or the end of the list is reached
        while (current) {
            // If the current node's key matches the key to remove
            if (current.key === key) {
                // If the node to remove is the head node, update the head to the next node
                if (current === this.head) {
                    this.head = this.head.nextNode;
                } else {
                    // If it's not the head, link the previous node to the next node, bypassing 'current'
                    previous.nextNode = current.nextNode;
                }

                this.listSize -= 1;

                // Node has been successfully removed, return true
                return true;
            } else {
                previous = current;
                current = current.nextNode;
            }
        }

        // If the key was not found in the list, return false
        return false;
    }

    // Returns the total number of nodes in this list
    size() {
        return this.listSize;
    }

    toString() {
        if (this.listSize === 0 || !this.head) {
            return `Empty linked list!`;
        }

        let current = this.head;
        let string = "";

        while (current) {
            string += `( ${current.key} : ${current.value} ) => `;
            current = current.nextNode;
        }

        string += `( ${current} ) `;

        return string;
    }
}

export default LinkedList;
