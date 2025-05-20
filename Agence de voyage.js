

















/*let dataGlobal = [];

fetch("https://dreamstravel.onrender.com/voyages")
  .then(response => response.json())
  .then(data => {
    dataGlobal = data;
    afficherVoyages(data);
    remplirFiltres(data);
    ajouterListeners(data);
  });
function afficherVoyages(data) {
  const container = document.getElementById("Noms");
  container.innerHTML = "";
  data.forEach(elt => {
    const card = document.createElement("div");
    card.setAttribute("class","voyage-card");
    const h2 = document.createElement("h2");
    h2.textContent = `${elt.nom} (${elt.destination})`;

    const img = document.createElement("img");
    img.src = elt.photo;

    const prix = document.createElement("p");
    prix.textContent = `Prix : ${elt.prix} TND`;

    const duree = document.createElement("p");
    duree.textContent = `Durée : ${elt.duree} jours`;

    const cat = document.createElement("p");
    cat.textContent = `Catégorie : ${elt.categId}`;

    card.append(h2, img, prix, duree, cat);
    document.getElementById("Noms").append(card);
  });
}

function remplirFiltres(data) {
  const selectCountries = document.getElementById("Countries");
  const selectDuree = document.getElementById("Duree");
  data.forEach(elt =>{
     let option1 = document.createElement("option");
     option1.setAttribute("value",`${elt.description}`);
    let option2 = document.createElement("option");
    option2.setAttribute("value",`${elt.duree}`);
    option1.innerHTML = `${elt.destination}`;
    option2.innerHTML = `${elt.duree} jours`;
    if(![...selectCountries.options].some(option => option.value === option1.value)){
      selectCountries.append(option1);
    }
    if(![...selectDuree.options].some(option => option.value === option2.value)){
      selectDuree.append(option2);
    }
  })
}
function ajouterListeners(data) {
  document.getElementById("Countries").addEventListener("change", () => filtrer(data));
  document.getElementById("PrixMin").addEventListener("input", () => filtrer(data));
  document.getElementById("PrixMax").addEventListener("input", () => filtrer(data));
  document.getElementById("Duree").addEventListener("change", () => filtrer(data));
  document.getElementById("A").addEventListener("click", () => {
    document.getElementById("Countries").value = "";
    document.getElementById("PrixMin").value = "";
    document.getElementById("PrixMax").value = "";
    document.getElementById("Duree").value = "";
    afficherVoyages(dataGlobal);
  });
  document.getElementById("D").addEventListener("click", () => {
    const container = document.getElementById("Noms");
    container.innerHTML = "";
    dataGlobal.forEach(elt => {
      const card = document.createElement("div");
      card.setAttribute("class","voyage-card");
      const h2 = document.createElement("h2");
      h2.textContent = `${elt.nom} (${elt.destination})`;
      const img = document.createElement("img");
      img.src = elt.photo;
      const desc = document.createElement("p");
      desc.innerHTML = `<strong>Description :</strong> ${elt.description}`;
      const depart = document.createElement("p");
      depart.innerHTML = `<strong>Départ :</strong> ${elt.depart}`;
      const remise = document.createElement("p");
      remise.innerHTML = `<strong>Remise :</strong> ${elt.remise}`;
      const complet = document.createElement("p");
      complet.innerHTML = `<strong>Complet :</strong> ${elt.complet}`;
      const offre = document.createElement("p");
      offre.innerHTML = `<strong>Offre :</strong> ${elt.offre}`;
      const horsOffre = document.createElement("p");
      horsOffre.innerHTML = `<strong>Hors Offre :</strong> ${elt.horsOffre}`;
      card.append(h2, img, desc, depart, remise, complet, offre, horsOffre);
      container.appendChild(card);
    });
  });
}
function filtrer(data) {
  const pays = document.getElementById("Countries").value.trim();
  const duree = document.getElementById("Duree").value.trim();
  const prixMinInput = document.getElementById("PrixMin").value.trim();
  const prixMaxInput = document.getElementById("PrixMax").value.trim();
  // Convertir les valeurs en Number si elles existent
  const prixMin = prixMinInput !== "" ? parseFloat(prixMinInput) : null;
  const prixMax = prixMaxInput !== "" ? parseFloat(prixMaxInput) : null;
    const resultats = data.filter(elt => {
    const matchDestination = !pays || elt.destination === pays;
    const matchDuree = !duree || elt.duree == Number(duree);
    const matchPrixMin = prixMin === null || elt.prix >= prixMin;
    const matchPrixMax = prixMax === null || elt.prix <= prixMax;
    return matchDestination && matchDuree && matchPrixMin && matchPrixMax;
  })};*/

let dataGlobal = [];
fetch("https://dreamstravel.onrender.com/voyages")
  .then(response => response.json())
  .then(data => {
    dataGlobal = data;
    afficherVoyages(data);
    remplirFiltres(data);
    ajouterListeners(data);
  });
function afficherVoyages(data) {
  const container = document.getElementById("Noms");
  container.innerHTML = "";
  data.forEach(elt => {
    const card = document.createElement("div");
    card.setAttribute("class","voyage-card");
    const h2 = document.createElement("h2");
    h2.textContent = `${elt.nom} (${elt.destination})`;

    const img = document.createElement("img");
    img.setAttribute("src",`${elt.photo}`);

    const prix = document.createElement("p");
    prix.textContent = `Prix : ${elt.prix} TND`;

    const duree = document.createElement("p");
    duree.textContent = `Durée : ${elt.duree} jours`;

    const cat = document.createElement("p");
    cat.textContent = `Catégorie : ${elt.categId}`;

    card.append(h2, img, prix, duree, cat);
    document.getElementById("Noms").append(card);
  });
}

function remplirFiltres(data) {
  const selectCountries = document.getElementById("Countries");
  const selectDuree = document.getElementById("Duree");
  data.forEach(elt =>{
      let option1 = document.createElement("option");
      option1.setAttribute("value",elt.description);
      option1.innerHTML = elt.destination;
      if(![...selectCountries.options].some(option => option.value === option1.value)){
        selectCountries.append(option1);
      }
      let option2 = document.createElement("option");
      option2.setAttribute("value",`${Number(elt.duree)}`);
      option2.innerHTML = `${elt.duree} jours`;
      if(![...selectDuree.options].some(option => option.value === option2.value)){
        selectDuree.append(option2);
      }
  })
}

function ajouterListeners(data) {
  document.getElementById("Countries").addEventListener("change", () => filtrer(data));
  document.getElementById("PrixMin").addEventListener("input", () => filtrer(data));
  document.getElementById("PrixMax").addEventListener("input", () => filtrer(data));
  document.getElementById("Duree").addEventListener("change", () => filtrer(data));
  document.getElementById("A").addEventListener("click", () => {
    document.getElementById("Countries").value = "";
    document.getElementById("PrixMin").value = "";
    document.getElementById("PrixMax").value = "";
    document.getElementById("Duree").value = "";
    afficherVoyages(dataGlobal);
  
});
  document.getElementById("D").addEventListener("click", () => {
    const container = document.getElementById("Noms");
    container.innerHTML = "";
    dataGlobal.forEach(elt => {
      const card = document.createElement("div");
      card.setAttribute("class","voyage-card");
      const h2 = document.createElement("h2");
      h2.textContent = `${elt.nom} (${elt.destination})`;
      const img = document.createElement("img");
      img.setAttribute("src",`${elt.photo}`);
      const desc = document.createElement("p");
      desc.innerHTML = `<strong>Description :</strong> ${elt.description}`;
      const depart = document.createElement("p");
      depart.innerHTML = `<strong>Départ :</strong> ${elt.depart}`;
      const remise = document.createElement("p");
      remise.innerHTML = `<strong>Remise :</strong> ${elt.remise}`;
      const complet = document.createElement("p");
      complet.innerHTML = `<strong>Complet :</strong> ${elt.complet}`;
      const offre = document.createElement("p");
      offre.innerHTML = `<strong>Offre :</strong> ${elt.offre}`;
      const horsOffre = document.createElement("p");
      horsOffre.innerHTML = `<strong>Hors Offre :</strong> ${elt.horsOffre}`;
      card.append(h2, img, desc, depart, remise, complet, offre, horsOffre);
      container.appendChild(card);
    });
  });
}
function filtrer(data) {
  let pays = document.getElementById("Countries").value.trim();
  let duree = document.getElementById("Duree").value.trim();
  let prixMinInput = document.getElementById("PrixMin").value.trim();
  let prixMaxInput = document.getElementById("PrixMax").value.trim();
  let prixMin = prixMinInput !== "" ? parseFloat(prixMinInput) : null;
  let prixMax = prixMaxInput !== "" ? parseFloat(prixMaxInput) : null;
  const resultats = data.filter(elt => {
    const matchDestination = !pays || elt.destination === pays;
    const matchDuree = !duree || elt.duree == Number(duree);
    const matchPrixMin = prixMin === null || elt.prix >= prixMin;
    const matchPrixMax = prixMax === null || elt.prix <= prixMax;
    return matchDestination && matchDuree && matchPrixMin && matchPrixMax;
  });
  afficherVoyages(resultats);
}