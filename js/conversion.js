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
