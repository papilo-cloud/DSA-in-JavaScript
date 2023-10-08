// A palindrome is a word, phrase, or number that is spelled the same forward and back‐
// ward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a
// canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
// and 1,001 is a numeric palindrome.
// We can use a stack to determine whether or not a given string is a palindrome. We take
// the original string and push each character onto a stack, moving from left to right. When
// the end of the string is reached, the stack contains the original string in reverse order,
// with the last letter at the top of the stack and the first letter at the bottom of the stack
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