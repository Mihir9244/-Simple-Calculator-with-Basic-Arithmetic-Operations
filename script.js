function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
                break;
        }
    }

    document.getElementById('result').textContent = "Result: " + result;
}
