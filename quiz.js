document.getElementById('submit').addEventListener('click', function () {
    const options = document.getElementsByName('capital');
    let selectedValue;
    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }
    const resultElement = document.getElementById('result');
    if (selectedValue === 'Paris') {
        resultElement.textContent = 'Correct! The capital of France is Peris.';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = 'Incorrect, Try again!';
        resultElement.className = 'incorrect';
    }
});