document.getElementById('factorial-btn').addEventListener('click', function () {
    const num = parseInt(document.getElementById('number').value);
    let factorial = 1;

    let i = 1;
    while (i <= num) {
        factorial *= i;
        i++;
    }

    document.getElementById('loops-result').textContent = Factorial: ${factorial};
});

document.getElementById('sum-btn').addEventListener('click', function () {
    const num = parseInt(document.getElementById('number').value);
    let sum = 0;

    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= num);

    document.getElementById('loops-result').textContent = Sum: ${sum};
});

document.getElementById('average-btn').addEventListener('click', function () {
    const num = parseInt(document.getElementById('number').value);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    const average = sum / num;
    document.getElementById('loops-result').textContent = Average: ${average.toFixed(2)};
});
