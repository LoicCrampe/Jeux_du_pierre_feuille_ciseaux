//Variable

var pierre = document.getElementById("pierre"); // getElementById = sert a recuperer l'ID d'une balise HTML
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");

var partie = document.getElementById("partie");
var result = document.getElementById("result");

var choix = [pierre.id, feuille.id, ciseaux.id]; //Crée un tableau avec toutes les variables inscrite
//result.innerHTML = choix;//ecrit la variable choix dans la variable result qui se trouve dans le h2 de l'html



//Fonctions

pierre.addEventListener("click", jeu); // La variable pierre (le bouton) va lancer la fonction "jeu" quand on cliquera dessus
feuille.addEventListener("click", jeu); // La variable feuille (le bouton) va lancer la fonction "jeu" quand on cliquera dessus
ciseaux.addEventListener("click", jeu); // La variable ciseaux (le bouton) va lancer la fonction "jeu" quand on cliquera dessus

function jeu() {
    var choix_alea = choix[Math.floor(Math.random() * (3))] // L'ordinateur choisis un nbr aleatoire (Math.floor = arrondie à l'unité inférieur) (Math.random = tire une valeur aleatoire entre 0 et 1) (* (3) = multiplie la valeur de Math.random donc valeur aléatoire 0 à 3 au lieu de 0 à 1)
    var choix_joueur = this.id; // This selectionne la variable qui a lancé la fonction jeu
    partie.innerHTML = ("L'ordinateur a joué " + choix_alea + ", le joueur a joué " + choix_joueur); // innerHTML = sert a écrire dans le HTML

    if (choix_joueur == choix_alea) {
        result.innerHTML = "Egalité";
    } else if (choix_joueur == "pierre" && choix_alea == "feuille") {
        result.innerHTML = "Perdu";
    } else if (choix_joueur == "pierre" && choix_alea == "ciseaux") {
        result.innerHTML = "Gagné !";
    } else if (choix_joueur == "feuille" && choix_alea == "pierre") {
        result.innerHTML = "Gagné !";
    } else if (choix_joueur == "feuille" && choix_alea == "ciseaux") {
        result.innerHTML = "Perdu";
    } else if (choix_joueur == "ciseaux" && choix_alea == "feuille") {
        result.innerHTML = "Gagné !";
    } else if (choix_joueur == "ciseaux" && choix_alea == "pierre") {
        result.innerHTML = "Perdu";
    }
}
