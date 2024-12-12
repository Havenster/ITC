<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Looping</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="main-header">
        <h1>Looping</h1>
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
        <section id="loops">
            <h2>Looping</h2>
            <form id="loops-form">
                <label for="number">Enter N:</label>
                <input type="number" id="number" name="number">
                
                <button type="button" id="factorial-btn">Factorial</button>
                <button type="button" id="sum-btn">Sum</button>
                <button type="button" id="average-btn">Average</button>
            </form>
            <p id="loops-result"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 ITC Project</p>
    </footer>

    <script>
        document.getElementById('factorial-btn').addEventListener('click', function () {
            const num = parseInt(document.getElementById('number').value);
            let factorial = 1;

            let i = 1;
            while (i <= num) {
                factorial *= i;
                i++;
            }

            document.getElementById('loops-result').textContent = `Factorial: ${factorial}`;
        });

        document.getElementById('sum-btn').addEventListener('click', function () {
            const num = parseInt(document.getElementById('number').value);
            let sum = 0;

            let i = 1;
            do {
                sum += i;
                i++;
            } while (i <= num);

            document.getElementById('loops-result').textContent = `Sum: ${sum}`;
        });

        document.getElementById('average-btn').addEventListener('click', function () {
            const num = parseInt(document.getElementById('number').value);
            let sum = 0;

            for (let i = 1; i <= num; i++) {
                sum += i;
            }

            const average = sum / num;
            document.getElementById('loops-result').textContent = `Average: ${average.toFixed(2)}`;
        });
    </script>
</body>

</html>
