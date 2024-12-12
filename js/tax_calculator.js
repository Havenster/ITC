<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Income Tax Calculator</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="main-header">
        <h1>Income Tax Calculator</h1>
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
        <section id="tax-calculator">
            <h2>Calculate Your Income Tax</h2>
            <form id="tax-form">
                <label for="income">Enter Annual Income:</label>
                <input type="number" id="income" name="income">

                <button type="button" id="calculate-tax">Calculate Tax</button>
            </form>
            <p id="tax-result"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 ITC Project</p>
    </footer>

    <script>
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

            document.getElementById('tax-result').textContent = `Your tax is $${tax.toFixed(2)}`;
        });
    </script>
</body>

</html>
