//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let minusE = sentence.replace("e", " ");
  return minusE;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let concat = firstSentence + secondSentence;
  return concat;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let fifth = sentence[4];
  return fifth;
}

//Exercice 5 : Afficher les 9 premiers caractères.
let displayFirstNineCharacters = function (sentence) {
  let nine = sentence.substring(0, 9);
  return nine;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let upper = sentence.toUpperCase();
  return upper;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let lower = sentence.toLowerCase();
  return lower;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let space = sentence.trim();
  return space;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
    if (typeof sentence == "string") {
      return true
    } else {
      return false
    }};

    //Exercice 10 : Afficher l'extension du fichier.
    let displayExtension = function (fileName) {
      let fileType = fileName.split(".");
      return fileType.pop();
    }

    //Exercice 11 : Compter le nombre d'espaces dans la chaîne.
    let countSpaces = function (sentence) {
      let spaceNumber = sentence.split(" ").length - 1;
      return spaceNumber;
    }

    //Exercice 12 : Inverser une chaîne de caractères.
    let invertSentence = function (sentence) {
      let revSentence = sentence.split("").reverse().join("");
      return revSentence;
    }

    //Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
    let searchInSentence = function (sentence) {
      let laManu = sentence.indexOf("La Manu") != -1;
      return laManu;
    }

    //Exercice 14 : Afficher la valeur absolue d'un nombre.
    let displayAbsoluteValue = function (number) {
      let absolut = Math.abs(number);
      return absolut;
    }

    //Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
    let displayAbsoluteValues = function (numbersArray) {
      let absolutArray = (numbersArray) => {
        return numbersArray.map(Math.abs);
      }
      return absolutArray(numbersArray);
    }

    //Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arrondir à l'entier le plus proche.
    let calculateArea = function (radius) {
      let surface = (radius * radius) * Math.PI;
      return Math.round(surface);
    }

    //Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
    let calculateHypotenuse = function (a, b) {
      let hypo = Math.hypot(a,b);
      return Math.floor(hypo);
    }