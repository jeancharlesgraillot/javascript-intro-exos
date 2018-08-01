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
