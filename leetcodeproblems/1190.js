/*You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 Example 1:

Input: s = "(abcd)"
Output: "dcba"*/



/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
     let stack = [];
     
     for (let char of s) {
         if (char === ')') {
             let segment = [];
             while (stack.length && stack[stack.length - 1] !== '(') {
                 segment.push(stack.pop());
             }
             stack.pop(); 
             for (let reversedChar of segment) {
                 stack.push(reversedChar);
             }
         } else {
             stack.push(char);
         }
     }
     
     return stack.join('');
 };
 