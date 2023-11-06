// We begin our stack implementation by defining the constructor function for a Stack class:

class Stack {
    
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element){
        this.dataStore[this.top++] = element;
    }

    pop(){
        if (this.top == 0) {
            return 'stack underflow'
        } else {
            return this.dataStore[--this.top];
        }
    }

    peek(){
        return this.dataStore[this.top - 1];
    }

    clear(){
        this.top = 0;
    }
    length(){
        return this.top;
    }
}

const stack = new Stack();
stack.push('hello');
stack.push('bonjour');
stack.push('sannu');

console.log(stack.length())
console.log(stack.peek())

stack.pop();
stack.pop();
console.log(stack.length())
console.log(stack.peek())
