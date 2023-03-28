class DoublyNode {
    constructor(data, prev = null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
}
  

class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    append(data) {
      const newNode = new DoublyNode(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }

    prepend(data) {
        const newNode = new DoublyNode(data, null, this.head);
    
        if (this.head) {
          this.head.prev = newNode;
        } else {
          this.tail = newNode;
        }
        this.head = newNode;
        this.size++;
    }
  
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        return;
      }
  
      if (index === 0) {
        this.prepend(data);
      } else if (index === this.size) {
        this.append(data);
      } else {
        const newNode = new DoublyNode(data);
        let current = this.head;
        let count = 0;
  
        while (count < index) {
          current = current.next;
          count++;
        }
  
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
      }
    }
  
  
    get(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let count = 0;
  
      while (count < index) {
        current = current.next;
        count++;
      }
  
      return current.data;
    }
  
  
    removeFirst() {
      if (!this.head) {
        return;
      }
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
    }
  
    removeLast() {
      if (!this.tail) {
        return;
      }
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
    }
  
    removeAt(index) {
        if (index < 0 || index >= this.size) {
          return;
        }
    
        if (index === 0) {
          this.removeFirst();
        } else if (index === this.size - 1) {
          this.removeLast();
        } else {
          let current = this.head;
          let count = 0;
    
          while (count < index) {
            current = current.next;
            count++;
          }
    
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.size--;
        }
    }

    print() {
      let current = this.head;
      let result = '';
  
      while (current) {
        result += current.data + ' <-> ';
        current = current.next;
      }
      result += 'null';
      console.log(result);
    }
}
  
  // Usage
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.removeFirst();
list.removeLast();
list.print(); // Output
  