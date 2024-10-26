// j'appel tout mes input select textarea
// par leur id
let nom = document.getElementById("nom");
nom.addEventListener("change", () => {
  testNom();
});

let prenom = document.getElementById("prenom");
prenom.addEventListener("change", () => {
  testPrenom();
});

let email = document.getElementById("email");
email.addEventListener("change", () => {
  testEmail();
});

let objet = document.getElementById("objet");
objet.addEventListener("change", () => {
  testObjet();
  afficheRef();
});

let message = document.getElementById("message");
message.addEventListener("change", () => {
  testMessage();
});

function testNom() {
  // je test si le champs est vide alors il me retourne une erreur
  if (nom.value == "") {
    afficheErreur("nom", "Ce Champs ne peux pas être vide!");
    return false;
  } else {
    let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/;

    if (reg.test(nom.value) === false) {
      afficheErreur("nom", "Ce champs comporte des caractères non autorisés!");
      return false;
    } else if (hasCode(nom.value)) {
      afficheErreur("nom", "Vous ne pouvez pas injecter de code ici!");
      return false;
    } else if (nom.value.length >= 40) {
      afficheErreur("nom", "Vous avez tapé un nom trop long!");
    }
  }
  removeErreur("nom");
  return true;
}

function testPrenom() {
  if (prenom.value == "") {
    afficheErreur("prenom", "Ce Champs ne peux pas être vide!");
    return false;
  } else {
    let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/;

    if (reg.test(prenom.value) === false) {
      afficheErreur(
        "prenom",
        "Ce champs comporte des caractères non autorisés!"
      );
      return false;
    } else if (hasCode(prenom.value)) {
      afficheErreur("prenom", "Vous ne pouvez pas injecter de code ici!");
      return false;
    } else if (prenom.value.length >= 40) {
      afficheErreur("prenom", "Vous avez tapé un nom trop long!");
    }
  }
  removeErreur("prenom");
  return true;
}

function testEmail() {
  if (email.value == "") {
    afficheErreur("email", "Ce champs ne peux pas être vide!");
    return false;
  } else {
    let emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;

    if (emailReg.test(email.value) === false) {
      afficheErreur(
        "email",
        "Ce champs comporte des caractères non autorisés!"
      );
      return flase;
    } else if (hasCode(email.value)) {
      afficheErreur("email", "Vous ne pouvez pas injecter de code ici!");
    }
  }
  removeErreur("email");
  return true;
}

function testObjet() {
  if (objet.value === "") {
    afficheErreur("objet", "Merci de choisir un objet");
    return false;
  } else {
    removeErreur("objet");
    return true;
  }
}

function afficheRef() {
  // affiche un input en plus lorsqu'on viens choisir
  // les deux derniers objet
  let ref = document.getElementById("champsRef");
  console.log(objet.selectedOptions[0].value);
  if (objet.value === "info-produit" || objet.value === "probleme-produit") {
    ref.classList.remove("none");
  } else {
    ref.classList.add("none");
  }
}

function testMessage() {
  if (message.value == "") {
    afficheErreur("message", "Votre message est vide");
    return false;
  } else if (hasCode(message.value)) {
    afficheErreur("message", "Vous ne pouvez pas écrire de script ici!");
    return false;
  } else if (message.value.length > 500) {
    afficheErreur("message", "Votre message est trop long!");
    return false;
  }
  removeErreur("message");
  return true;
}

function afficheErreur(id, messageErreur) {
  // cette fonction va faire afficher l'erreur
  // si l'erreur est comise alors une bordure rouge apparaitra
  let input = document.getElementById(id);
  input.classList.add("input-error");
  let p = document.getElementById("error-" + id);
  p.innerText = messageErreur;
  p.classList.remove("d-none");
}

function removeErreur(id) {
  // cette fonction va faire enlever l'erreur dans l'input
  let input = document.getElementById(id);
  input.classList.remove("input-error");
  let p = document.getElementById("error-" + id);
  p.innerText = "";
  p.classList.add("d-none");
}

function hasCode(text) {
  // cette fonction va chercher dans une chaine de caractere s'il y a du code
  let reg = /<script/;
  return reg.test(text);
}

// Submit du formulaire en récupérant tout les function
let monForm = document.getElementById("form");
monForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let test1 = testNom();
  let test2 = testPrenom();
  let test3 = testEmail();
  let test4 = testObjet();
  let test5 = testMessage();

  if (
    test1 === true &&
    test2 === true &&
    test3 === true &&
    test4 === true &&
    test5 === true
  ) {
    monForm.submit();
  }
});
