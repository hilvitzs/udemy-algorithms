// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let first = list.head;
  let second = list.head;

  while (n > 0) {
    second = second.next;
    n--;
  }

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  return first;
}

module.exports = fromLast;
