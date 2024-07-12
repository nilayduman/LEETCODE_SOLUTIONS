/* Palindrome Partitioning II Hard. 
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
.

Return the minimum cuts needed for a palindrome partitioning of s. */

var minCut = function(s) {
     const n = s.length;
     const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
     const minCuts = Array(n).fill(Infinity);
    
     for (let end = 0; end < n; end++) {
         for (let start = 0; start <= end; start++) {
             if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
                 isPalindrome[start][end] = true;
             }
         }
     }
     
     for (let i = 0; i < n; i++) {
         if (isPalindrome[0][i]) {
             minCuts[i] = 0;
         } else {
             for (let j = 0; j < i; j++) {
                 if (isPalindrome[j + 1][i]) {
                     minCuts[i] = Math.min(minCuts[i], minCuts[j] + 1);
                 }
             }
         }
     }
     
     return minCuts[n - 1];
 };
 
 
