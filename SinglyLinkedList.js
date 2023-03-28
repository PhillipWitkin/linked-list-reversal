class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

  
class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    append(data) {
        // TODO
        // insert at end of linked list
    }

    prepend(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.size++;
    }
    
  
    
}
  
// Usage
const list = new SinglyLinkedList();

