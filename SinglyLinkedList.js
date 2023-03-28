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
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = newNode;
      }
      this.size++;
    }

    prepend(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.size++;
    }
    
  
    
}
  
// Usage
const list = new SinglyLinkedList();

