// Have the function BracketMatcher(str) take the str parameter being passed and return 1 
// if the brackets are correctly matched and each one is accounted for. 
// Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1
// but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. 
// Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

// Examples
// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1

function BracketMatcher(str) {
    // create empty array 
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            // push beginning parenthesis to stack 
            stack.push("("); 
        // match ending parenthesis 
        } else if (str[i] === ")") {
            if (stack.length === 0) {
                // if it does not exist return 0 
                return 0; 
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0 ? 1:0; 
}

console.log(BracketMatcher("(coder)(byte))")); // 0
console.log(BracketMatcher("(coder)(b(yte))")); // 1 