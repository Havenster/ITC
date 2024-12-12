<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payroll</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="main-header">
        <h1>Payroll</h1>
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
        <section id="payroll">
            <h2>Simple Payroll Calculation</h2>
            <form id="payroll-form">
                <label for="hours">Enter Hours Worked:</label>
                <input type="number" id="hours" name="hours" step="0.01">

                <label for="rate">Enter Hourly Rate:</label>
                <input type="number" id="rate" name="rate" step="0.01">

                <button type="button" id="calculate-payroll">Calculate Payroll</button>
            </form>
            <p id="payroll-result"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 ITC Project</p>
    </footer>

    <script>
        document.getElementById('calculate-payroll').addEventListener('click', function () {
            const hours = parseFloat(document.getElementById('hours').value);
            const rate = parseFloat(document.getElementById('rate').value);

            // Calculate payroll
            const payroll = hours * rate;

            // Display the result in the designated element
            document.getElementById('payroll-result').textContent = `Payroll: $${payroll.toFixed(2)}`;
        });
    </script>
</body>

</html>
