function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumberDisplay").innerText = "Le nombre aléatoire est : " + randomNumber;
}
