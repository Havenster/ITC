<nav>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="conversion.html">Conversion</a></li>
        <li><a href="tax_calculator.html">Income Tax Calculator</a></li>
        <li><a href="loops.html">Looping</a></li>
        <li><a href="payroll.html">Payroll</a></li>
    </ul>
</nav>

document.getElementById('convert-btn').addEventListener('click', function () {
    const value = parseFloat(document.getElementById('value').value);
    const type = document.getElementById('conversion-type').value;
    let result;

    if (type === 'c-to-f') {
        result = (value * 9) / 5 + 32 + ' °F';
    } else if (type === 'f-to-c') {
        result = ((value - 32) * 5) / 9 + ' °C';
    } else if (type === 'm-to-ft') {
        result = value * 3.28084 + ' ft';
    } else if (type === 'ft-to-m') {
        result = value / 3.28084 + ' m';
    }

    document.getElementById('conversion-result').textContent = result;
});
