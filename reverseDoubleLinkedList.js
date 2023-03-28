function reverseDoublyLinkedList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let current = head;
    let temp = null;
  
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
  
    if (temp) {
      head = temp.prev;
    }
  
    return head;
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.head = reverseDoublyLinkedList(list.head);
list.print(); // Output: 3 <-> 2 <-> 1 <-> null


  