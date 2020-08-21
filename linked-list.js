class _Node {
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head=null;
  }

  insertFirstItem(item) {
    this.head = new _Node(item,this.head);
  }

  insertLastItem(item) {
    if(this.head === null){
      this.head = new _Node(item,this.head);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null);
    }
  }

  insertBefore(item,key){
    if(this.head === null){
      console.log('could not find key');
      return;
    }

    if(this.head.value.includes(key)){
      this.head = new _Node(item,this.head);
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while(currNode!== null){
      if(currNode.value.includes(key)){
        break;
      }
      console.log(currNode.value,currNode.next.value);
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null){
      console.log('could not find key');
      return;
    }
    
    console.log('FOUND KEY');
    previousNode.next = new _Node(item,currNode);
  }

  insertAfter(item,key){
    if(this.head === null) {
      console.log('could not find key');
      return;
    }

    let currNode = this.head;

    while(currNode !== null){
      if(currNode.value.includes(key)){
        break;
      }
      currNode = currNode.next;
    }

    if(currNode === null){
      console.log('could not find key');
      return;
    }

    currNode.next = new _Node(item,currNode.next);
  }

  insertAt(item,position){
    if(position < 1 || position !== Math.floor(position)) {
      console.log('position must be a positive integer');
    }

    if(position === 1){
      this.head = new _Node(item,this.head);
      return;
    }

    if(this.head === null){
      console.log('list doesn\'t have that many positions');
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    let count = 1;

    while(count !== position) {
      if(currNode === null){
        console.log('list doesn\'t have that many positions');
        return;
      }
      previousNode = currNode;
      currNode = currNode.next;
      count++;
    }

    previousNode.next = new _Node(item,currNode);
  }

  find(item) {
    let currNode = this.head;
    if(!this.head){
      return null;
    }

    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      } else {
        currNode = currNode.next;
      }      
    }

    return currNode;      
  }

  remove(item) {
    if(!this.head){
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while((currNode!== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  
}

function display(linkedList){
  let currNode = linkedList.head;
  while(currNode !== null){
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log('---------------------');
}

function isEmpty(linkedList){
  if(linkedList.head === null){
    return true;
  }
  return false;
}

function size(linkedList){
  let currNode = linkedList.head;
  let count = 0;
  while(currNode !== null){
    currNode = currNode.next;
    count++;
  }
  return count;
}

function findPrevious(item,linkedList){
  if(linkedList.head === null) {
    console.log('list is empty');
    return;
  }

  let currNode = linkedList.head;
  let previousNode = linkedList.head;

  while(currNode.next !== null){
    if(currNode.next.value === item){
      break;
    }
    previousNode = currNode;
    currNode = currNode.next;
  }

  if(currNode.next === null) {
    console.log('could not find item');
    return;
  }

  return currNode;
}

function findLast(linkedList){
  if(linkedList.head === null){
    console.log('list is empty');
    return;
  }

  let currNode = linkedList.head;

  while(currNode.next !== null){
    currNode = currNode.next;
  }

  return currNode;  
}

function main(){
  let SLL = new LinkedList;

  SLL.insertLastItem('Apollo');
  SLL.insertLastItem('Boomer');
  SLL.insertLastItem('Helo');
  SLL.insertLastItem('Husker');
  SLL.insertLastItem('Starbuck');
  // SLL.print();

  SLL.insertLastItem('Tauhida');
  // SLL.print();

  SLL.remove('squirrel');
  // SLL.print();

  // SLL.insertBefore('NEW ITEM','Star');
  // SLL.print();

  SLL.insertBefore('InsertBeforeApollo','Apoll');
  // SLL.print();

  SLL.insertAfter('InsertAfterApollo','Apoll');

  SLL.insertAt('Insert At 9', 9);

  SLL.remove('Tauhida');
  display(SLL);

  console.log(size(SLL));

  const EmptyLL = new LinkedList;
  console.log('SLL is empty?', isEmpty(SLL));
  console.log('EmptyLL is empty?', isEmpty(EmptyLL));

  console.log('before "Boomer"', findPrevious('Boomer',SLL));

  console.log('last node of SLL', findLast(SLL));

  display(SLL);
  reverseLL(SLL);
  display(SLL);

  // console.log(thirdFromEnd(SLL));
  // console.log(thirdFromEnd(EmptyLL));
  console.log(middleOfList(SLL));
  console.log(middleOfList(EmptyLL));
}

// main();

//4. Removes duplicat nodes from linked list, O(n^2)

//5.

function reverseLL(linked){
  if(linked.head === null){
    return;
  }

  function reverse(current, next){
    if(next === null){
      linked.head = current;
      return;
    }

    reverse(current.next,next.next);
    next.next = current;
    current.next = null;
  }

  reverse(linked.head, linked.head.next);
}

//6.
function thirdFromEnd(linked){
  if(linked.head === null){
    console.log('less than 3 elements in list');
    return;
  }

  if(linked.head.next === null){
    console.log('less than 3 elements in list');
    return;
  }

  if(linked.head.next.next === null){
    console.log('less than 3 elements in list');
    return;
  }

  let currNode = linked.head;

  while(currNode.next.next.next !== null){
    currNode = currNode.next;
  }

  return currNode;
}

//7.
function middleOfList(linked){
  if(linked.head === null) {
    console.log('list is empty');
    return;
  }

  function findMiddle(currNode,count=1){
    if(currNode.next === null){
      return count;
    }
    
    let length = findMiddle(currNode.next,count+1);
    if (count !== Math.ceil(length/2)){
      return length;
    }

    if(length%2 === 0){
      console.log('list has an even number of elements');
      return length;
    }

    return currNode;
  }

  return findMiddle(linked.head);
}


//8.


main();