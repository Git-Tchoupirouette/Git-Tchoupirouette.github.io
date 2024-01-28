function generateRandomNumber() {
    // Générer un nombre aléatoire entre 1 et 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Afficher le nombre aléatoire dans un paragraphe avec l'id "randomNumber"
    document.getElementById("randomNumber").innerText = "Le nombre aléatoire est : " + randomNumber;
}
