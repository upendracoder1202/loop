/* Take the number N and the name from the user as inputs, and print the name N times.

Test Case1:
Input:
2
Bedanti
Output:
Bedanti
Bedanti

*/
const input = require("readline-sync");
let N = input.questionInt("enter how many times print names = ");
let Name = input.question("enter a name = ");
while (N>0) {
    console.log(Name)
    N--
};