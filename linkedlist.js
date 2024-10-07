class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class linkedList {
    constructor() {
        this.head = new Node();
        this.size = 0;
    }
}
