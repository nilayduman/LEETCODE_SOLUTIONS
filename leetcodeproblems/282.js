/* Expression Add Operators HARD 

Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

Note that operands in the returned expressions should not contain leading zeros. */

var addOperators = function(num, target) {
     const result = [];
     
     const backtrack = (expr, index, prevOperand, currValue) => {
         if (index === num.length) {
             if (currValue === target) {
                 result.push(expr);
             }
             return;
         }
         
         for (let i = index; i < num.length; i++) {
             if (num[index] === '0' && i > index) break; // Avoid leading zeros
             
             const numStr = num.substring(index, i + 1);
             const operand = parseInt(numStr);
             
             if (index === 0) {
                 backtrack(numStr, i + 1, operand, operand);
             } else {
                 backtrack(expr + '*' + numStr, i + 1, prevOperand * operand, currValue - prevOperand + (prevOperand * operand));
                 backtrack(expr + '+' + numStr, i + 1, operand, currValue + operand);
                 backtrack(expr + '-' + numStr, i + 1, -operand, currValue - operand);
             }
         }
     };
     
     backtrack('', 0, 0, 0);
     
     return result;
 };
 

