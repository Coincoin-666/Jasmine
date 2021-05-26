//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
  let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days.
let returnThirdElement = function (days) {
  return days[2];
}

//Exercice 3 : Afficher la valeur de l'index 3 du tableau days.
let returnThirdIndex = function (days) {
  return days[3];
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.
let changeSecondElement = function (languages) {
  languages[1] = "php";
  return languages;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.
let addAtTheEnd = function (languages) {
  languages.push("ruby", "python");
  return languages;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.
let addAtFirst = function (languages) {
  languages.unshift("html", "css");
  return languages;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.
let removeFirstElement = function (languages) {
  languages.shift([0]);
  return languages;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.
let removeLastElement = function (languages) {
  languages.pop();
  return languages;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.
let createPerson = function () {
  let person = [];
  person["name"] = "Jean";
  person["age"] = 45;
  person["city"] = "Paris";
  return person;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.
let returnName = function (person) {
  return person["name"];
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J'ai 45 ans et j'habite Paris."
let returnSentence = function (person) {
  let fname = person["name"];
  let age = person["age"];
  let city = person["city"];
  // return '"Bonjour, je suis ' + fname + ". J'ai " + age + " ans et j'habite " + city + '."';
  return "Bonjour, je suis ".concat(fname) + ". J'ai ".concat(age) + " ans et j'habite ".concat(city) + ".";
}

//Exercice 12 : Transformer la variable string en tableau.
let returnArray = function (string) {
  return string.split(",");
}

//Exercice 13 : Trier le tableau array.
let sortArray = function (array) {
  return array.sort();
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères.
let returnString = function (array) {
  return array.toString();
}
