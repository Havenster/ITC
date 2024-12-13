document.getElementById('calculate-tax').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    let tax;

    if (income <= 50000) {
        tax = income * 0.1;
    } else if (income <= 100000) {
        tax = income * 0.2;
    } else {
        tax = income * 0.3;
    }

    document.getElementById('tax-result').textContent = Your tax is $${tax.toFixed(2)};
});
