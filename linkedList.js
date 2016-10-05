function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyList() {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  var node = new Node(value);
  currentNode = this.head;
  //use case #1: empty list
  if (!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }

  //Use case #2: non-empty List
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length++;
  return node;
}

SinglyList.prototype.search = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;

  //use case #1: invalid position
  if (length === 0 || position < 1 || position> length) {
    throw new Error("Node does not exist");
  }

  //Use case #2: valid position
  while(count < position) {
    currentNode = currentNode.next;
    count++
  }

  return currentNode;
}

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 0;
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  //Use case #1: invalid position

  if (length === 0 || position < 1 || position > length) {
    throw new Error("Node does not exist");
  }

  //Use case #2 first node is being removed
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;
    return deletedNode;
  }

  //use Case #3: any other node is removed
  while(count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++
  }

  beforeNodeToDelete.next = nodeToDelete.next ;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
}





//EXERCISE 



/*
As is true with most common CS questions, the answers to these are available online. I STRONGLY encourage
you to try to solve these problems BEFORE Googling hints and answers. The real value in these problems
is the problem solving and critical thinking.

1) Implement our Node and SinglyList functions as classes

2) Create a DoublyList class that has add, search, and remove methods. Remember that there will be more
“use cases” with our doubly liked list. For example, what happens if we remove the last node of a doubly
linked list? What if we have a doubly linked list with 2 nodes, and we remove the second node?

3) Create a findLength function that takes the head of a linked list as an argument, finds the length,
and sets the _length value

4) Create a function that takes the head of a linked list and find the middle node while once
traversing the list ONCE. (hint: remember that linked lists hold pointers to other objects. This
allows us to do something like myList.head.next.next to get the value of the third element.)

5) Create a function that takes the head of a linked list and reverses it. We can do this in-place
Your function will have one input: the head of the list.
Your function should return the new head of the list.

An in-place algorithm operates directly on its input and changes it, instead of creating and
returning a new object. This is sometimes called destructive, since the original input is "destroyed"
when it's edited to create the new output.
Careful: "In-place" does not mean "without creating any additional variables"! Rather, it means
"without creating a new copy of the input." In general, an in-place function will only create
additional variables that are O(1) space.

Here are two functions that do the same operation, except one is in-place and the other is out-of-place:
*/

function squareArrayInPlace(intArray) {

  intArray.forEach(function(int, index) {
      intArray[index] *= int;
  });

  // NOTE: we don't need to return anything - this is just a convenience
  return intArray;
}

function squareArrayOutOfPlace(intArray) {

  // we allocate a new array with the length of the input array
  var squaredArray = [];

  intArray.forEach(function(int, index) {
      squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}


/*
Working in-place is a good way to save space. An in-place algorithm will generally have O(1) space cost.

But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered,"
which can affect code outside of your function.

Additionally, we don't often have to worry about space in JavaScript (we have plenty of it in most cases, so it
doesn't come into play unless we have something very complicated). However, this is important to know!

Hint: we can reverse the list while making just one walk from head to tail of the input list!


6) Create a function that takes the head of a linked list and determines if it has a cycle.

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no
longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Your function should return a boolean. (true if it has a loop, false if it does not)

Careful: a cycle can occur in the middle of a list, or it can simply mean the last node links back to the first node.

*/


class LinkedList = {
  constructor() {
    super();
  }
}


