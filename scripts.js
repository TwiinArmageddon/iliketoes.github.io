function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const correctPassword = "florconalas"; // Aquí pon la contraseña

    // Aquí puedes añadir todas las que quieras
    const clues = [
        "Hint 1: You know the movie, and you also know he's fake.",
        "Hint 2: Otra prueba",
        "Hint 3: Puede ser que estes cerca"
    ]

    let clueCount = clues.length;
    let randomClue = Math.floor(Math.random() * clueCount);

    if (input === correctPassword) {
        document.getElementById("link").innerHTML = `<a href="https://tu-link-final.com" target="_blank">✨ Haz clic para continuar ✨</a>`;
    } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
        document.getElementById("clue").innerText = clues[randomClue];
    }
}