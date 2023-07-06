
class Palindrome{
    
    constructor(){
        this.data = [];
    }
    isPalindrome(word){
        for (let i = 0; i < word.length; i++) {

            this.data.push(word[i]);           
        }
        let reverseWord = '';
        while (this.data.length > 0) {

            reverseWord += this.data.pop();
        }
        if (word == reverseWord) {

            return true;
        } else {

            return false;
        }
    }
}

const palindrome = new Palindrome();
let pal = 'racecar';

console.log(palindrome.isPalindrome(pal))