const correctAnswer = 8; 

document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});

function checkNumber() {
    const userInput = parseInt(document.getElementById('userInput').value);
    
    const resultDiv = document.getElementById('result');

    if (userInput === correctAnswer) {
        resultDiv.textContent = "Gefeliciteerd! Je hebt het getal geraden.";
    } else if (userInput > correctAnswer) {
        resultDiv.textContent = "Het ingevoerde getal is te hoog!";
    } else {
        resultDiv.textContent = "Het ingevoerde getal is te laag!";
    }
}
