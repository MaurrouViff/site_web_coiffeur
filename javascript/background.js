// Cette fonction sert à mettre une image de fond aléatoire
function setBackgroundImageRandom() {
    let images = [
        "coin-douche.jpg",
        "coin-sechoir.png",
        "armoire.jpg",
        "coin-devanture.png",
        "devanture_bonne1.png",
        "devanture_bonne2.png",
        "coin-miroir.png"
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    let imageUrl = "url(assets/backgrounds/" + randomImage + ")";

    let sectionElement = document.querySelector("section");
    sectionElement.style.backgroundImage = imageUrl;
}
// Quand la page s'actualise
document.addEventListener("DOMContentLoaded", function() {
    // Nom de la fonction
    setBackgroundImageRandom();
});