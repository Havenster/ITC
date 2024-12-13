document.getElementById('calculate-payroll').addEventListener('click', function () {
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    const payroll = hours * rate;
    document.getElementById('payroll-result').textContent = Payroll: $${payroll.toFixed(2)};
});
