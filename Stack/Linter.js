/* Let’s create the beginnings of a JavaScript linter. We’ll focus on just one specific
aspect of the linter—opening and closing braces. This includes parentheses,
square brackets, and curly braces.
*/


class Linter{
    constructor() {
       this.dataStore = [];
    }
    lint(text) {
       for (let i = 0; i < text.length; i++) {
          if (this.openingTag(text[i])) {
             this.dataStore.push(text[i])
          } else if (this.closingTag(text[i])) {
             if (this.closeRecentTag(text[i])) {
                this.dataStore.pop()
             } else {
                console.log('Error: Incorrect closing tag', text[i])
             }
          }
       }
       if (this.dataStore.length > 0) {
          console.log(this.mostRecentOpening() +" Does not have a matching braces")
       }
    }
    
    
    openingTag(char){
       return ["(", "[", "{"].includes(char);
    }
    closingTag(char){
       return [")", "]", "}"].includes(char);
    }
    closingTagOf(char) {
      return {")": "(", "]": "[", "}": "{"}[char];
    }
    mostRecentOpening(){
       return this.dataStore[this.dataStore.length-1];
    }
    closeRecentTag(tag) {
       return this.closingTagOf(tag) == this.mostRecentOpening();
    }
 }

//  If we use this class as follows:
// We will not receive any errors since this line of JavaScript is correct.

 const linter = new Linter();
 linter.lint("( var x = { y: [1, 2, 3] } )")
 
//  But if we leave off the last closing parenthesis altogether:
// We’ll get this error message:
// ( does not have a closing brace