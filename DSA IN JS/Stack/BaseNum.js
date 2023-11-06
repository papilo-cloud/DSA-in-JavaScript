// Multiple Base Conversions

class Base{
    constructor(){
       this.data = [];
    }
    baseFunction(number, base){
       let ans = ''; 
       do {
          this.data.push(number%base)
          number = Math.floor(number / base)
       } while (number > 0);
       while (this.data.length > 0) {
          ans += this.data.pop();
       }
       return ans;
   }
 }
 
 const base = new Base();
 console.log(base.baseFunction(23, 2));