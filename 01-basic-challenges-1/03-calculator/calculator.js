function calculator(num1, num2,operator) {
    if(operator === "+") return num1 + num2
    if(operator=== "-") return num1-num2;
    if(operator === "*") return num1 * num2
    if(operator === "/") return num1/ num2
    return "Invalid operator! Please check the operator you have entered."
}

module.exports = calculator;
