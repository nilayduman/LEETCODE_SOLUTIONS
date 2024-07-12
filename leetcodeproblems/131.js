/* Palindrome Partitioning

Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]] */

var partition = function(s) {
     const result = [];
     const currentPartition = [];
 
     const isPalindrome = (str, start, end) => {
         while (start < end) {
             if (str[start] !== str[end]) return false;
             start++;
             end--;
         }
         return true;
     };
 
     const backtrack = (start) => {
         if (start >= s.length) {
             result.push([...currentPartition]);
             return;
         }
 
         for (let end = start; end < s.length; end++) {
             if (isPalindrome(s, start, end)) {
                 currentPartition.push(s.substring(start, end + 1));
                 backtrack(end + 1);
                 currentPartition.pop();
             }
         }
     };
 
     backtrack(0);
     return result;
 };