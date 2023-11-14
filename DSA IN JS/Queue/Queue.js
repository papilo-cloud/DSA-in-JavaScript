class Queue {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    enqueue(element){
        this.dataStore[this.top++] = element;
    }
    dequeue() {
        return this.dataStore.shift();
    }
    isEmpty(){
        if (this.dataStore.length == 0) {
            return true
        } else {
            return false
        }
    }
    peek(){
            return this.dataStore[this.dataStore.length-1];
    }
}

const queue = new Queue();