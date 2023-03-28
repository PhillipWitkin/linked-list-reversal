function reverseLinkedList(head) {
    let current = head;
    let previous = null;
    let next = null;
  
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
  
    return previous;
}
  
// Usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3 -> null

const reversedHead = reverseLinkedList(list.head);
const reversedList = new SinglyLinkedList();
reversedList.head = reversedHead;
reversedList.print(); // Output: 3 -> 2 -> 1 -> null
  