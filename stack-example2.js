/*
//https://medium.com/javascript-in-plain-english/javascript-what-are-stack-and-queue-79df7af5a566

A stack is a type of data structure that is linear where order is conserved. For many people, stack is known to have a LIFO (Last In First Out) mechanism. Let’s take a look at an example of a stack in real life: stack of plates.

*/ 

class Node {
  constructor(next, value) {
    this.next = next
    this.value = value
  }
}

class Stack {
  constructor() {
    this.stack = null
  }

  push(element) {
    let head = this.stack
    let newNode = new Node(null, element)

    if (!head) {
      this.stack = newNode
    } else {
      newNode.next = head
      this.stack = newNode
    }
  }

  pop() {
    let head = this.stack

    if (!head) return 'Stack is empty!'

    this.stack = head.next
    return head.value
  }

  peek() {
    if (!this.stack) return 'Stack is empty!'
    return this.stack.value
  }
}