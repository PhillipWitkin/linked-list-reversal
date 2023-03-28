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
    
  
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
          return;
        }
    
        if (index === 0) {
          this.prepend(data);
        } else if (index === this.size) {
          this.append(data);
        } else {
          const newNode = new Node(data);
          let current = this.head;
          let count = 0;
          let previous;
    
          while (count < index) {
            previous = current;
            current = current.next;
            count++;
          }
    
          newNode.next = current;
          previous.next = newNode;
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
        if (this.head) {
          this.head = this.head.next;
          this.size--;
        }
      }
    
    removeLast() {
        if (!this.head) {
          return;
        }
    
        if (!this.head.next) {
          this.head = null;
          this.size--;
          return;
        }
    
        let current = this.head;
        let previous;
    
        while (current.next) {
          previous = current;
          current = current.next;
        }
    
        previous.next = null;
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
          let previous;
    
          while (count < index) {
            previous = current;
            current = current.next;
            count++;
          }
    
          previous.next = current.next;
          this.size--;
        }
    }
  
    print() {
      let current = this.head;
      let result = '';
  
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
      result += 'null';
      console.log(result);
    }
}
  
// Usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.removeFirst();
list.removeLast();
list.print(); // Output: 1 -> 2 -> null
