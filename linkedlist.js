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
