class Queue {
    constructor() {
        this.queueStore = [];
        this.top = 0;
    }
    enqueue(element){
        this.queueStore.push(element);
    }
    dequeue() {
        return this.queueStore.shift();
    }
    size(){
        return this.queueStore.length
    }
    isEmpty(){
        if (this.queueStore.length == 0) {
            return true
        } else {
            return false
        }
    }
    toString(){
        let str = '';
        for (let i = 0; i < this.queueStore.length; i++) {
            str += this.queueStore[i]+ ' ';
        }
        return str
    }
    peek(){
        if (this.isEmpty()) {
            return 'No element in queue'
        } else {
            return this.queueStore[0];
        }
    }
}

const queue = new Queue();

queue.enqueue('First Document')
queue.enqueue('Second Document')
queue.enqueue('Third Document')

console.log('queue size: ', queue.size())
console.log('front of queue: ', queue.peek())
console.log('Elements in queue: ', queue.toString())

queue.dequeue()
console.log('queue size: ', queue.size())
console.log('front of queue: ', queue.peek())
console.log('Elements in queue: ', queue.toString())