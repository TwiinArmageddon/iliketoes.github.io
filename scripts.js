function checkPassword() {
    const input = document.getElementById("password").value.trim().toLowerCase();
    const correctPassword = "PROJECTTYLER"; // Aquí pon la contraseña 1
    const correctPassword1 = "februaryhomestuck"; // Aquí pon la contraseña 2
    const correctPassword2 = "roomeight"; // Aquí pon la contraseña 2

    // Aquí puedes añadir todas las que quieras
    const clues = [
        "Hint 1: You know the movie, and you also know he's fake.",
        "Hint 2: Nice month.",
        "Hint 3: Open it."
    ]

    let clueCount = clues.length;
    let randomClue = Math.floor(Math.random() * clueCount);

    if (input === correctPassword) {
        // Link contraseña 1
        document.getElementById("link").innerHTML = `<a href="https://TwiinArmageddon.github.io/onlyforyou.github.io/resources/RG9udCBiZSBmb29sZWQgRXZhbiwga2VlcCBsb29raW5n.pdf" target="_blank">✨Click to continue ✨</a>`;
    } else if (input === correctPassword1) {
        // Link contraseña 2
        document.getElementById("link").innerHTML = `<a href="https://TwiinArmageddon.github.io/iliketoes.github.io/error/index.html" target="_blank">✨ Click to continue ✨</a>`;
    } else if (input === correctPassword2) {
        // Link contraseña 3
        document.getElementById("link").innerHTML = `<a href="https://example.com" target="_blank">✨ Click to continue ✨</a>`;
    } else {
        document.getElementById("link").innerText = "❌ Contraseña incorrecta. Intenta otra vez.";
        document.getElementById("clue").innerText = clues[randomClue];
    }
}
