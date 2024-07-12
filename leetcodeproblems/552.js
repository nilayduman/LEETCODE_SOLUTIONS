/* Student Attendance Record II
HARD 

An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
Any student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

 

Example 1:

Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2). */

var checkRecord = function(n) {
     const MOD = 1e9 + 7;
     
     if (n === 0) return 1;
     if (n === 1) return 3;
 
     // DP arrays for ending with P, L1, L2 without 'A'
     let P = new Array(n + 1).fill(0);
     let L1 = new Array(n + 1).fill(0);
     let L2 = new Array(n + 1).fill(0);
     // DP arrays for ending with P, L1, L2 with one 'A'
     let PA = new Array(n + 1).fill(0);
     let L1A = new Array(n + 1).fill(0);
     let L2A = new Array(n + 1).fill(0);
 
     P[0] = 1;  // A sequence of length 0 ends with nothing
     P[1] = 1;  // "P"
     L1[1] = 1; // "L"
     L2[2] = 1; // "LL"
     PA[1] = 1;  // "A"
 
     for (let i = 2; i <= n; i++) {
         P[i] = (P[i - 1] + L1[i - 1] + L2[i - 1]) % MOD;
         L1[i] = P[i - 1];
         L2[i] = L1[i - 1];
         
         PA[i] = (P[i - 1] + L1[i - 1] + L2[i - 1] + PA[i - 1] + L1A[i - 1] + L2A[i - 1]) % MOD;
         L1A[i] = PA[i - 1];
         L2A[i] = L1A[i - 1];
     }
 
     let result = (P[n] + L1[n] + L2[n] + PA[n] + L1A[n] + L2A[n]) % MOD;
     
     return result;
 };
 
 
 