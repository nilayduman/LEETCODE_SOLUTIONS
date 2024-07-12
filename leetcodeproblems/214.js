/* Shortest Palindrome 
HARD 

You are given a string s. You can convert s to a 
palindrome
 by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.*/ 

var shortestPalindrome = function(s) {
     if (!s) return s;
     
     let rev_s = s.split('').reverse().join('');
     let l = s + '#' + rev_s;
     
     let lps = new Array(l.length).fill(0);
     
     for (let i = 1; i < l.length; i++) {
         let j = lps[i - 1];
         while (j > 0 && l[i] !== l[j]) {
             j = lps[j - 1];
         }
         if (l[i] === l[j]) {
             j++;
         }
         lps[i] = j;
     }
     
     let longestPalindromePrefixLength = lps[lps.length - 1];
     let toAdd = s.slice(longestPalindromePrefixLength).split('').reverse().join('');
     
     return toAdd + s;
 };
 
 
 