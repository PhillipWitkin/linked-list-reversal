function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
  
function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}
  
SinglyLinkedList.prototype.append = function(data) {
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
  };
  
SinglyLinkedList.prototype.prepend = function(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  };
  
SinglyLinkedList.prototype.removeFirst = function() {
    if (!this.head) {
      return;
    }
  
    this.head = this.head.next;
    this.size--;
  };
  
SinglyLinkedList.prototype.removeLast = function() {
    if (!this.head) {
      return;
    }
  
    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;
      let previous;
  
      while (current.next) {
        previous = current;
        current = current.next;
      }
  
      previous.next = null;
    }
    this.size--;
};
    
SinglyLinkedList.prototype.print = function() {
    let current = this.head;
    let result = '';
  
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  };
  
// Usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.removeFirst();
list.removeLast();
list.print(); // Output: 1 -> 2 -> null
list.append(3);
list.reverse();
list.print(); // Output: 3 -> 2 -> 1 -> null
