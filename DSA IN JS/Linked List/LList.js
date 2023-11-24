/*
Connected data that is dispersed throughout memory are known as nodes.
In a linked list, each node represents one item in the list. The big question,
then, is: if the nodes are not next to each other in memory, how does the
computer know which nodes are part of the same linked list?
This is the key to the linked list: each node also comes with a little extra
information, namely, the memory address of the next node in the list.
This extra piece of data—this pointer to the next node’s memory address—is
known as a link. 

 */

// (A linked list’s first node can also be referred to as its head, and its final node
// as its tail.)

class Node {
    data
    nextNode
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }

}

class LinkedList{
    constructor(firstNode){
        this.firstNode = firstNode
    }
}

const node1 = new Node('Node-A')
const node2 = new Node('Node-B')
const node3 = new Node('Node-C')
const node4 = new Node('Node-D')

node1.nextNode = node2
node2.nextNode = node3
node3.nextNode = node4
console.log(node1)

const list = new LinkedList(node1)

console.log(list)