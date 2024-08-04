function calculate(a, b, operator) {
    if (operator === "+" ) {
        return a + b;
    }
    if (operator === "-") {
        return a - b;
    }
    if (operator === "*") {
        return a * b;
    }
    if (operator === "/") {
        return a / b;
    }
}

const result = calculate.apply({a: null, b: null , operator: null}, [2, 3, "+"]);
console.log(result);
