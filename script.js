let marvelCard = document.getElementById('marvelCard');
let dcCard = document.getElementById('dcCard');

class marvel {
    constructor (nom, image, identite, pouvoir, ville, equipe){
        this.nom = nom
        this.image = image
        this.identite = identite
        this.pouvoir = pouvoir
        this.ville = ville
        this.equipe = equipe
    }
}
class DC {
    constructor (nom, image, identite, pouvoir, ville, equipe){
        this.nom = nom
        this.image = image
        this.identite = identite
        this.pouvoir = pouvoir
        this.ville = ville
        this.equipe = equipe
    }
}

//Marvel

let magneto = new marvel ('Magneto','assets/marvel/magneto.jpg','Max Eisenhardt','Magnetokinesis', 'Oświęcim (Auschwitz)', 'Confrerie des mutants');
let thanos = new marvel ('Thanos','assets/marvel/thanos.jpg','Titan fou','Physiologie de Titan', 'Titan (Saturne VI)', 'Black Order');
let docOctopus = new marvel ('Docteur Octopus','assets/marvel/Doctor_Octopus.jpg','Otto Octavius','Ingenieur de génie et spécialiste des radiations', 'Schenectady (New York)', 'Sinister Six');
let mysterio = new marvel ('Mysterio','assets/marvel/mysterio.jpg','Quentin Beck','VFX Artist (Illusions)', 'Californie, (Etat-Unis)', 'Sinister Six');
let docDoom = new marvel ('Docteur Doom','assets/marvel/Doctor_doom.jpg','Victor von Doom','Surreal Sorcery', ' Haasenstadt, (Latveria, fiction)', 'la cabale');
let loki = new marvel ('Loki','assets/marvel/Loki.jpg','Loki Laufeyson','Télékinésie', 'Jötunheim', 'Membre des Asgardiens');

//DC Comics

let darkseid = new DC ('Darkseid','assets/dc/darkseid.jpg','Uxas','New God Physiology', 'Apokolips', `Darkseid's Elite`);
let joker = new DC ('Joker','assets/dc/joker.jpg','Jack Napier','Génie criminel', 'Gotham', 'Injustice League');
let lexLuthor = new DC ('Lex Luthor','assets/dc/lex_luthor.jpg','Alexander Joseph Luthor ','Génie Intellectuel', 'Metropolis', 'Legion of Doom');
let doomsday = new DC ('Doomsday','assets/dc/doomsday.jpg','Davis Bloome','Force Surhumaine', 'Krypton', 'Societé secrete des Super Villains');
let mongul = new DC ('Lord of the Warworld','assets/dc/mongul.jpg','Mongul','Super force', 'Warworld', 'Societé secrete des Super Villains');
let sinestro = new DC ('Sinestro','assets/dc/Sinestro.jpg','Thaal Sinestro','Anneau de la Yellow Lantern', 'Korugar', 'Sinestro Corps');


//Marvel Cards

const marvelChar = [magneto, thanos, docOctopus, mysterio, docDoom, loki];

for (let i = 0; i <= 5; i++) {
    marvelCard.innerHTML += `
    <div class="card" style="width: 13rem;">
        <img src="${marvelChar[i].image}" class="card-img-top" alt="Image de ${marvelChar[i].nom}">
        <div class="card-body">
        <ul>
        <li class="card-text">Nom : ${marvelChar[i].nom}</li>
        <li class="card-text">Identité : ${marvelChar[i].identite}</li>
        <li class="card-text">Pouvoir : ${marvelChar[i].pouvoir}</li>
        <li class="card-text">Ville : ${marvelChar[i].ville}</li>
        <li class="card-text">Equipe : ${marvelChar[i].equipe}</li>
        </ul>
        </div>
      </div>
      `
}


//DC Cards

const dcChar = [darkseid, joker, lexLuthor, doomsday, mongul, sinestro];

for (let i = 0; i <= 5; i++) {
    dcCard.innerHTML += `
    <div class="card" style="width: 13rem;" >
        <img src="${dcChar[i].image}" class="card-img-top" alt="Image de ${dcChar[i].nom}">
        <div class="card-body">
        <ul>
        <li class="card-text ">Nom : ${dcChar[i].nom}</li>
        <li class="card-text">Identité : ${dcChar[i].identite}</li>
        <li class="card-text">Pouvoir : ${dcChar[i].pouvoir}</li>
        <li class="card-text">Ville : ${dcChar[i].ville}</li>
        <li class="card-text">Equipe : ${dcChar[i].equipe}</li>
        </ul>
        </div>
      </div>

      `
}
