const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var removeMaximum = function (head) {
  if (head == null) return -1;
  var temp = head;
  var max = temp.data;

  while (temp !== null) {
    if (temp.data > max) {
      max = temp.data;
    }
    temp = temp.next;
  }
  //console.log('max', max)

  head = reversell(head);
  var ll = head;

  //console.log('rev', ll)

  if (ll.data === max) {
    ll = ll.next;
    head = reversell(ll);
    //console.log('head1', head)
    return head;
  } else
    while (ll.next !== null) {
      if (ll.next.data === max) {
        ll.next = ll.next.next;
        head = reversell(head);

        return head;
      }
      ll = ll.next;
    }
  //return head
};

function reversell(ll) {
  let pre = null;
  let post = null;
  while (ll !== null) {
    post = ll.next;
    ll.next = pre;
    pre = ll;
    ll = post;
  }
  return pre;
}
