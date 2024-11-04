// Challenge 3
function formatName(fullName) {
  // Mettre tout en minuscules pour un format uniforme
  fullName = fullName.toLowerCase();

  // Trouver la position de l'espace pour diviser la chaîne
  let spaceIndex = fullName.indexOf(" ");

  // Extraire le prénom et le nom à partir des indices
  let lastName = fullName.slice(0, spaceIndex);
  let firstName = fullName.slice(spaceIndex + 1);

  // Capitaliser la première lettre de chaque partie sans charAt
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);

  // Retourner le nom formaté
  return `${firstName} ${lastName}`;
}

// Exemple d'utilisation
console.log(formatName("dupont jean")); // "Jean Dupont"

// challenge 4
function calculator(nbr1, nbr2, opr) {
  if (opr == "+") {
    return console.log(
      "La somme de " + nbr1 + " + " + nbr2 + " = " + (nbr1 + nbr2)
    );
  } else if (opr == "-") {
    return console.log(
      "La somme de " + nbr1 + " - " + nbr2 + " = " + (nbr1 - nbr2)
    );
  } else if (opr == "*") {
    return console.log(
      "La somme de " + nbr1 + " * " + nbr2 + " = " + nbr1 * nbr2
    );
  } else if (opr == "/") {
    return console.log(
      "La somme de " + nbr1 + " / " + nbr2 + " = " + nbr1 / nbr2
    );
  } else if (opr == "%") {
    return console.log(
      "La somme de " + nbr1 + " % " + nbr2 + " = " + (nbr1 % nbr2)
    );
  }
}
calculator(12, 6, "+");

// challenge 5
function isAdult(age) {
  if (age < 0) {
    alert("l'age doit etre superieur a 0");
  } else {
    age >= 18 ? console.log("c'est un majeur") : console.log("c'est un mineur");
  }
}

isAdult(12);

// challeng6

function detectSeason(mois) {
  let saison;
  switch (mois.toLowerCase()) {
    case "decembre":
    case "janvier":
    case "fevrier":
      saison = "Hiver";
      break;
    case "Mars":
    case "avril":
    case "mais":
      saison = "Printemp";
      break;
    case "juin":
    case "juillet":
    case "aout":
      saison = "Ete";
      break;
    case "septembre":
    case "octobre":
    case "novembre":
          saison = "Autome";
          break; 
        default: "mois invalide"
  }
  return mois
}

console.log(detectSeason("Hiver"));
console.log(detectSeason("Printemp"));
console.log(detectSeason("Ete"));
console.log(detectSeason("Autome"));

// Challenge Baba
/*Exercice 1 : Manipulation de chaînes (strings)
Contexte : Tu développes une petite application qui 
doit formater des noms et extraire certaines informations.

Objectif :

Prends une chaîne sous le format suivant : "Nom: Dupont, Prénom: Marie, Age: 28, Ville: Paris".
Effectue les manipulations suivantes :
Extrayez le prénom et mets-le en majuscules.
Remplace le nom "Dupont" par "Martin".
Transforme la chaîne entière pour qu’elle soit en minuscules.
Extrayez uniquement le prénom et la ville pour former une nouvelle chaîne sous 
la forme suivante : "Marie habite à Paris".
Affiche chaque étape dans la console pour voir les résultats de tes manipulations.
Bonus : Essaie d’ajouter un contrôle pour vérifier si la chaîne contient
 bien un prénom et un nom (utilise includes par exemple). */

function manipulationString(input) {
  console.log("Chaîne d'origine :", input);

  // 1. Extraire le prénom et le mettre en majuscules
  let firstName = input.match(/Prénom: (\w+)/)[1]; // Extraction du prénom
  firstName = firstName.toUpperCase();
  console.log("Prénom en majuscules : " + firstName);

  // 2. Remplacer le nom "Dupont" par "Martin"
  let updatedName = input.replace("Nom: Dupont", "Nom: Martin");
  console.log("Nom remplacé :", updatedName);

  // 3. Transformer toute la chaîne en minuscules
  let lowerCaseString = updatedName.toLowerCase();
  console.log("Chaîne en minuscules :", lowerCaseString);

  // 4. Extraire uniquement le prénom et la ville pour former une nouvelle chaîne
  let city = input.match(/Ville: (\w+)/)[1]; // Extraction de la ville
  let result = `${
    firstName.charAt(0) + firstName.slice(1).toLowerCase()
  } habite à ${city}`;
  console.log("Nouvelle chaîne avec prénom et ville :", result);

  // Bonus : Vérification de la présence d'un prénom et d'un nom
  if (input.includes("Nom:") && input.includes("Prénom:")) {
    console.log("La chaîne contient bien un prénom et un nom.");
  } else {
    console.log("La chaîne ne contient pas un prénom et un nom.");
  }
}

// Exemple d'utilisation
const inputString = "Nom: Dupont, Prénom: Marie, Age: 28, Ville: Paris";
manipulationString(inputString);
