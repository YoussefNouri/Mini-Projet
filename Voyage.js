let cat = document.getElementById("Cat");
let nom = document.getElementById("N");
let photo = document.getElementById("Ph");
let destination = document.getElementById("D");
let prix = document.getElementById("prix");
let duree = document.getElementById("Dur");
let date = document.getElementById("date");
let BTNAjout = document.getElementById("BTNAjouter");
let BTNReset = document.getElementById("BTNReset");
let table = document.getElementsByTagName("table")[0];
let oldpage = document.body.cloneNode(true);
BTNReset.addEventListener("click", () => {
  document.body.replaceWith(oldpage.cloneNode(true));
});

BTNAjout.addEventListener("click", () => {
  let tr = table.insertRow();
  let td1 = tr.insertCell();
  td1.innerHTML = cat.value;
  let td2 = tr.insertCell();
  td2.innerHTML = nom.value;
  let td3 = tr.insertCell();
  td3.innerHTML = photo.value;
  let td4 = tr.insertCell();
  td4.innerHTML = destination.value;
  let td5 = tr.insertCell();
  td5.innerHTML = prix.value;
  let td6 = tr.insertCell();
  td6.innerHTML = duree.value;
  let td7 = tr.insertCell();
  td7.innerHTML = date.value;

  // Bouton Modifier
  let td8 = tr.insertCell();
  let btnModf = document.createElement("button");
  btnModf.textContent = "Modifier";
  td8.appendChild(btnModf);

  // Bouton Supprimer
  let td9 = tr.insertCell();
  let btnSupp = document.createElement("button");
  btnSupp.textContent = "Supprimer";
  td9.appendChild(btnSupp);

  // Bouton Haut
  let td10 = tr.insertCell();
  let btnHaut = document.createElement("button");
  btnHaut.textContent = "Haut";
  td10.appendChild(btnHaut);

  // Bouton Bas
  let td11 = tr.insertCell();
  let btnBas = document.createElement("button");
  btnBas.textContent = "Bas";
  td11.appendChild(btnBas);

  // Mise en forme (Gras & Rouge)
  let td12 = tr.insertCell();
  let cbGras = document.createElement("input");
  cbGras.type = "checkbox";
  cbGras.title = "Gras";
  let cbRouge = document.createElement("input");
  cbRouge.type = "checkbox";
  cbRouge.title = "Rouge";
  td12.append("Gras", cbGras, " Rouge", cbRouge);

  btnModf.addEventListener("click", () => {
    td1.innerHTML = cat.value;
    td2.innerHTML = nom.value;
    td3.innerHTML = photo.value;
    td4.innerHTML = destination.value;
    td5.innerHTML = prix.value;
    td6.innerHTML = duree.value;
    td7.innerHTML = date.value;
  });


  btnSupp.addEventListener("click", () => {
    const rowIndex = tr.rowIndex;
    table.deleteRow(rowIndex);
  });
  btnHaut.addEventListener("click", () => {
    const prev = tr.previousElementSibling;
    if(prev){
      tr.before(prev);
    }
    btnBas.disabled = true;
  });

  btnBas.addEventListener("click", () => {
    const next = tr.nextElementSibling;
    if(next){
      tr.after(next);
    }
    btnHaut.disabled = true;
  });

  cbGras.addEventListener("change", () => {
    tr.style.fontWeight = cbGras.checked ? "bold" : "normal";
  });

  cbRouge.addEventListener("change", () => {
    tr.style.color = cbRouge.checked ? "red" : "black";
  });
});     
