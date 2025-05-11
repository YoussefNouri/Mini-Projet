fetch("https://dreamstravel.onrender.com/voyages")
.then(response => response.json())
.then(data => data.forEach(elt => {
        let oldpage = document.body.cloneNode(true);
        let accueil = document.getElementById("A");
        accueil.addEventListener("click",() => {
                document.body.replaceWith(oldpage);
        });
        let divNoms = document.getElementById("Noms");
        let divs = document.createElement("div");
        divs.setAttribute("id",`${elt.id}`)
        let h2 = document.createElement("h2");
        h2.innerHTML = elt.nom;
        let span = document.createElement("span");
        span.innerHTML = ` (${elt.destination})`;
        h2.append(span);
        let img = document.createElement("img");
        img.setAttribute("src",`${elt.photo}`);
        divs.append(h2,img);
        divNoms.append(divs);

        let details = document.getElementById("D");
        details.addEventListener("click",() => {
                let p = document.createElement("p");
                p.innerHTML = `${elt.description}`
                let ul = document.createElement("ul");
                let li1 = document.createElement("li");
                li1.innerHTML = `Départ : ${elt.depart}`;
                let li2 = document.createElement("li");
                li2.innerHTML = `Remise : ${elt.remise}`;
                let li3 = document.createElement("li");
                li3.innerHTML = `Complet : ${elt.complet}`;
                let li4 = document.createElement("li");
                li4.innerHTML = `Offre : ${elt.offre}`;
                let li5 = document.createElement("li");
                li5.innerHTML = `Hors Offre : ${elt.horsOffre}`;
                ul.append(li1,li2,li3,li4,li5);
                p.append(ul);
                divs.append(p);
        });
        let select1 = document.getElementById("Countries");
        let option1 = document.createElement("option");
        option1.setAttribute("value",`${elt.destination}`);
        option1.setAttribute("id",`${elt.categId}`);
        option1.innerHTML = `✈️${elt.destination},Catégorie : ${elt.categId}`;
        if(![...select1.options].some(option => option.value === option1.value)){
                select1.append(option1);
        }
        select1.addEventListener("change",opt => {
                let selectedValue = opt.target.value;
                let selectedId = opt.target.id;
                let selectedOption = data.find(elt => elt.destination === selectedValue && elt.categId === selectedId);
                if(selectedOption){
                        h2.innerHTML = selectedOption.nom;
                        span.innerHTML = `(${selectedOption.destination})`;
                        img.src = `${selectedOption.photo}`;
                        divs.append(h2,span,img);
                }
        });

        let select2 = document.getElementById("Prix");
        let option2 = document.createElement("option");
        option2.setAttribute("value",`${elt.prix}`);
        option2.innerHTML = `💰${elt.prix}`;
        if(![...select2.options].some(option => option.value === option2.value)){
                select2.append(option2);
        }
        select2.addEventListener("change",option => {
                let selectedValue = option.target.value;
                let selectedOption = data.find(elt => elt.prix === selectedValue);
                if(selectedOption){
                        h2.textContent = selectedOption.nom;    
                        span.textContent = ` (${selectedOption.destination})`;
                        img.src = `${selectedOption.photo}`;
                        let prix = document.createElement("p");
                        prix.textContent = `Prix : ${selectedOption.prix}`;
                        divs.append(h2,span,imgprix);
                }
        })
        let select3 = document.getElementById("Durée");
        let option3 = document.createElement("option");
        option3.innerHTML = `⌚${elt.duree}`;
        if(![...select3.options].some(option => option.value === option3.value)){
                select3.append(option3);
        }
        select3.addEventListener("change",option =>{
                let selectedValue = option.target.value;
                let selectedOption = data.find(elt => elt.duree === selectedValue);
                if(selectedOption){
                        h2.textContent = selectedOption.nom;
                        span.textContent = `(${selectedOption.destination})`;
                        img.src = `${selectedOption.photo}`;
                        let duree = document.createElement("p");
                        duree.innerHTML = `Durée : ${selectedOption.duree}`;
                        divs.append(h2,span,img,duree);
                }
        })
}))
