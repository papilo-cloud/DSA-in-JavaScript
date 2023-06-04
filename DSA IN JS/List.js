// A list is an ordered sequence of data. Each data item stored in a list is called an ele‐
// ment. In JavaScript, the elements of a list can be of any data type. There is no predeter‐
// mined number of elements that can be stored in a list, though the practical limit will be
// the amount of memory available to the program using the list.

// The List ADT does not specify a storage function for a list, but for our implementation
// will use an array named dataStore

// listSize (property) Number of elements in list
// pos (property) Current position in list
// length (property) Returns the number of elements in list
// clear (function) Clears all elements from list
// toString (function) Returns string representation of list
// getElement (function) Returns element at current position
// insert (function) Inserts new element after existing element
// append (function) Adds new element to end of list
// remove (function) Removes element from list
// front (function) Sets current position to first element of list
// end (function) Sets current position to last element of list
// prev (function) Moves current position back one element
// next (function) Moves current position forward one element
// currPos (function) Returns the current position in list
// moveTo (function) Moves the current position to specified position


class List{
    constructor() {
        this.dataStore = []
        this.pos = 0
        this.listSize = 0
    }

    // Append: Adding an Element to a List
    append(element){
        this.dataStore[this.listSize++] = element
        // After the element is appended, listSize is incremented by 1
    }

    // Remove: Removing an Element from a List
    // To start, let’s define a helper function, find(), for finding the element to remove:
    find(element){
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i
            }
            
        }
        return -1
    }
    remove(element){
        if (this.find(element) > -1) {
            this.dataStore.splice(element, 1)
            --this.listSize
            return true
        }
        return false
    }

    // Length: Determining the Number of Elements in a List
    length() {
        return this.listSize
    }

    // ToString: Returns string representation of list
    toString(){
        return this.dataStore
    }

}

// Let's see our List implementation so far

const list = new List()

// Let's add elements to our lists
list.append('Orange')
list.append('Mango')
list.append('Guava')

// let's print our list elements
console.log(list.toString()) //Orange, mango, Guava

// let's remove an elements from our list
list.remove('Mango')

// let's print our list elements
console.log(list.toString()) //Orange, Guava