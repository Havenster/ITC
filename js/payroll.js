document.getElementById('calculate-payroll').addEventListener('click', function () {
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
        document.getElementById('payroll-result').textContent = "Please enter valid positive numbers for hours and rate.";
        return;
    }

    const payroll = hours * rate;
    document.getElementById('payroll-result').textContent = `Payroll: $${payroll.toFixed(2)}`;
});
