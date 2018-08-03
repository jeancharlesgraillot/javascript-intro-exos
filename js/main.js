/***********************************Beginners Intro****************************/


//Exo 1//

/*console.log("Hello World !");

var hello = ("Hello World !");

console.log(hello);*/


//Exo 2//

/*console.log(3*3);
console.log(12/0);
console.log(4+9+78);
console.log(12-7);
console.log(5e4);*/

//Exo 3//

/*var nom = prompt("Entrez votre nom :");
var res = nom.toUpperCase ();
console.log("Bonjour Mr ou Mme " + res + " !");*/

//Exo 4//

/*var nom = prompt("Entrez votre nom :");
var prenom = prompt("Entrez votre prenom :");
var nomUp = nom.toUpperCase();
var prenomUp = prenom.toUpperCase();
console.log("Bonjour " + prenomUp + " " + nomUp + " !");*/

//Exo 5//

/*myNumber = "123";
myNumber = Number("123");
console.log(myNumber);
console.log(typeof myNumber);*/

//Exo 6//

/*var name = "Jean-Charles Graillot";
var upperCaseName = name.toUpperCase();
var lowerCaseName = name.toLowerCase();
console.log(upperCaseName);
console.log(lowerCaseName);*/


/*************************************Intro advanced***************************/


//Exo 1//

/*var string1 = "Vous êtes trop fort";
var string2 = "";

if (string1.length === 0) {
  console.log("false");
}else {
  console.log("true");
}

if (string2.length === 0) {
  console.log("false");
}else {
  console.log("true");
}*/

//Exo 2//

/*var actualYear = Number(prompt("Entrez l'année actuelle :"));
var birthYear = Number(prompt("Entrez votre année de naissance :"));
var agePerso = actualYear - birthYear;

console.log("Votre âge est de " + agePerso + " ans");

var neighborAge = Number(prompt("Entrez l'âge du voisin"));
var twoAges = agePerso + neighborAge;

console.log("Vos âges cumulés sont de " + twoAges + " ans");*/

//Exo 3//

/*var prixChaussures = 70;
var prixJean = 59;
var prixTshirt = 20;
var total = prixChaussures + prixJean + prixTshirt;
console.log("Le total sans réduction est de " + total + " euros.");
var reduction = 20/100;
var totalReduction = total*(1 - reduction);
console.log("Le total avec réduction est de " + totalReduction + " euros.");*/

//Exo 4//

/*var nombre1 = Number(prompt("Entrez la valeur du nombre 1 :"));
var nombre2 = Number(prompt("Entrez la valeur du nombre 2 :"));
var resultat = nombre1 + nombre2;
console.log("La somme des 2 nombres est de " + resultat);*/

//Exo 5//

/*var prenom = prompt("Entrez votre prenom :");
var nom = prompt("Entrez votre nom :");

var prenomFirstLetter = prenom.substr(0, 1).toUpperCase();
var prenomLastLetter = prenom.substr(-1, 1).toUpperCase();

console.log("Votre prénom commence par la lettre " + prenomFirstLetter + " et se termine par la lettre " + prenomLastLetter);

var nomFirstLetter = nom.substr(0, 1).toUpperCase();
var nomLastLetter = nom.substr(-1, 1).toUpperCase();

console.log("Votre nom commence par la lettre " + nomFirstLetter + " et se termine par la lettre " + nomLastLetter);

console.log("Soit combiné : " + prenomFirstLetter + prenomLastLetter + nomFirstLetter + nomLastLetter);

var age = Number(prompt("Entrez votre âge: "));
var ageDivise = age/33;
console.log(Math.round(ageDivise));*/


/*************************************Intermédiaire part1**********************/

//Exo 1//

/*var chiffre1 = 5;
var chiffre2 = 8;
var chiffre3 = 4;
var chiffre4 = 6;

console.log(Math.max(chiffre1, chiffre2, chiffre3, chiffre4));*/

//Exo 2//


/*var age = Number(prompt("Entrez votre âge :"));

while (age < 0) {
  age = Number(prompt("Entrez votre âge réel :"));
}
if (age < 21) {
  console.log("Accès verrouillé");
}
if (age >= 21) {
  console.log("Accès déverouillé");
}
if (age % 2 === 0) {
  console.log("Votre âge est pair");
}
if (Number.isInteger(Math.sqrt(age))) {
  console.log("Votre âge est un nombre carré");
}*/


//Exo 3//

/*var hiddenNumber = 47;

var findingNumber = Number(prompt("Devinez le nombre caché :"));

while (findingNumber !== hiddenNumber) {
  if (findingNumber < hiddenNumber) {
    console.log("Votre nombre est trop petit");
    findingNumber = Number(prompt("Devinez le nombre caché :"));
  }
  else (findingNumber > hiddenNumber) {
    console.log("Votre nombre est trop grand");
    findingNumber = Number(prompt("Devinez le nombre caché :"));
  }
}

if (findingNumber === hiddenNumber) {
  console.log("Vous avez deviné le nombre caché !");
}*/


//Exo 4//

/*var i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}*/


//Exo 5//

/*var i = 1;

while (i <= 100) {
  i++;
  if (i % 2 === 0) {
    console.log(i);
  }
}*/


//Exo 6//

/*var longeur = Number(prompt("Entrez une longeur :"));
var largeur = Number(prompt("Entrez une largeur :"));
var profondeur = Number(prompt("Entrez une profondeur :"));
var debit = Number(prompt("Entrez un débit :"));

function tempsRemplissage(longeur, largeur, profondeur, debit) {
    var volumePiscine = longeur*largeur*profondeur;
    var tempsMinutes = volumePiscine/debit;
    console.log("Le temps de remplissage sera de " + tempsMinutes + " minutes.");
}

tempsRemplissage(longeur, largeur, profondeur, debit);*/


//Exo 7//

/*var rayon = Number(prompt("Entrez le rayon du cercle :"));

function aireCercle(rayon) {
  var aire = Math.PI*rayon*rayon;
  console.log("L'aire du cercle est de " + aire + " mètres carré.");
}

aireCercle(rayon);

function perimetreCercle(rayon) {
  var perimetre = 2*Math.PI*rayon;
  console.log("Le périmètre du cercle est de " + perimetre + " mètres.");
}

perimetreCercle(rayon);*/


//Exo 8//

// var ligne = "";
// for (i = 0; i < 5; i++) {
//     ligne += "*";
//     console.log(ligne);
// }


//Exo 9//


/*for (var i = 1; i < 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FIZZBUZZ");
  }
  else if (i % 3 === 0) {
    console.log("FIZZ");
  }
  else if (i % 5 === 0) {
    console.log("BUZZ");
  }
  else {
    console.log(i);
  }
}*/


/*************************************Intermédiaire part2**********************/

//Exo 1//

// var ligne = "";
//
//
// for (var i = 0; i < 8; i++) {
//   ligne += "\n";
//   for (var j = 0; j < 16; j++) {
//     if (ligne.length % 2 === 0) {
//       ligne += "#";
//     }
//     else {
//       ligne += " ";
//     }
//   }
// }
//
// console.log(ligne);


//Exo 2//


/*for (var i = 0; i < 4; i++) {
  for (var y = 0; y < 4; y++) {
    if (i === y) {
      console.log(1);
    }
    else {
      console.log(0);
    }

  }
  console.log('"-----"');
}*/


//Exo 3//


// var montantPanier = Math.round(Number(prompt("Entrez le total de vos achats :")));
//
// function parite(montantPanier) {
//   if (montantPanier % 2 === 0) {
//     console.log("true");
//   }
//   else {
//     console.log("false");
//   }
// }
// parite(montantPanier);


//Exo 4//


// var nb = Number(prompt("Entrez un nombre :"));
//
// function facto(nb) {
//   while (Number.isInteger(nb) === false) {
//     console.log("Erreur, veuillez saisir un entier positif !");
//     nb = Number(prompt("Entrez un nombre :"));
//   }
//
//   var multiple = 1;
//   for (var i = 1; i < nb; i++) {
//   multiple += multiple*i;
//   }
//
//   console.log(multiple);
// }
//
// facto(nb);


//Exo 5//


// var facture = prompt("Taper votre facture avec des tirets : ");
//
// function correction(facture) {
//
//   for (var i = 0; i < facture.length; i++) {
//     if (isNaN(facture)) {
//       facture = facture.replace("-" , "_");
//     }
//     else {
//       console.log("Veuillez tapez du texte :");
//       facture = prompt("Taper votre facture avec des tirets : ");
//     }
//   }
//   console.log(facture);
// }
//
// correction(facture);


//Exo 6//

/*var listeCourses = ["baguette", "lait", "soda", "fromage", "yahourt"];

console.log(listeCourses[0]);
console.log(listeCourses[4]);
console.log(listeCourses[2]);*/


//Exo 7//

// var humanInfos = ["JC", "Graillot", "36 ans", "28/09/1981" ];

// humanInfos = ["JC", "Graillot", "36", "28/09/1981" ];
//
//
// function afficherInfos(humanInfos) {
//   for (var i = 0; i < humanInfos.length; i++) {
//
//       console.log(humanInfos[i]);
//   }
// }
//
// afficherInfos(humanInfos);

// humanInfos = [
//  ["JC", "Graillot", "36", "28/09/1981" ],
//  ["Jessy", "Fouace", "19", "07/10/1998"],
//  ["Marie-Do", "Graillot", "33", "23/10/1984"]
// ];
//
// function afficherInfos(humanInfos) {
//   for (var i = 0; i < humanInfos.length; i++) {
//     for (var y = 0; y < humanInfos[i].length; y++) {
//       console.log(humanInfos[i][y]);
//     }
//   }
// }
//
// afficherInfos(humanInfos);
