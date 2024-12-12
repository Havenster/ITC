<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversion</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="main-header">
        <h1>Conversion</h1>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="conversion.html">Conversion</a></li>
                <li><a href="tax_calculator.html">Income Tax Calculator</a></li>
                <li><a href="loops.html">Looping</a></li>
                <li><a href="payroll.html">Payroll</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="conversion">
            <h2>Conversion</h2>
            <form id="conversion-form">
                <label for="value">Enter Value:</label>
                <input type="number" id="value" name="value">

                <select id="conversion-type">
                    <option value="c-to-f">Celsius to Fahrenheit</option>
                    <option value="f-to-c">Fahrenheit to Celsius</option>
                    <option value="m-to-ft">Meters to Feet</option>
                    <option value="ft-to-m">Feet to Meters</option>
                </select>

                <button type="button" id="convert-btn">Convert</button>
            </form>
            <p id="conversion-result"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 ITC Project</p>
    </footer>

    <script>
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
    </script>
</body>

</html>
