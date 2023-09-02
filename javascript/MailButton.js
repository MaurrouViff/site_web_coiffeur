function toggleEmail() {
    let emailElement = document.getElementById("email");
    let toggleButton = document.getElementById("toggleButton");
    let numberElement = document.getElementById("number");
    let toggleButton2 = document.getElementById("toggleButton2");

    if (emailElement.style.display === "none") {
        // Si l'adresse e-mail est masquée, l'afficher
        emailElement.style.display = "block";
        toggleButton.textContent = "Cacher";
    } else {
        // Si l'adresse e-mail est affichée, la masquer
        emailElement.style.display = "none";
        toggleButton.textContent = "Afficher";
    }
    if (numberElement.style.display === "none") {
        // Si l'adresse e-mail est masquée, l'afficher
        numberElement.style.display = "block";
        toggleButton2.textContent = "Cacher";
    } else {
        // Si l'adresse e-mail est affichée, la masquer
        numberElement.style.display = "none";
        toggleButton2.textContent = "Afficher";
    }
}
