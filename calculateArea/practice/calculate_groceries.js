let calculation;

function calculateTotalAndSetResult(amount1, amount2, amount3) {
    let totalAmount = amount1 + amount2 + amount3;
    let resultText;

    if (totalAmount < 0) {
        resultText = 'The total of groceries cannot be negative.';
    } else {
        resultText = `The total of groceries is: ${totalAmount}`;
    }

    document.getElementById('result').innerText  = resultText;
}

function performCalculation() {
    amount1 = parseFloat(document.getElementById('grocery1').value || 0);
    amount2 = parseFloat(document.getElementById('grocery2').value || 0);
    amount3 = parseFloat(document.getElementById('grocery3').value || 0);

    calculateTotalAndSetResult(amount1, amount2, amount3);
}