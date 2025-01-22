const nom_sorcier = "Archibald";
const nom_boutique = "MaSuperBoutiqueDePotions";
let nb_potion_soins = 1;
let prix_potion_soins = 2;
let boutique_oc = true;

let nom_boutique = "MaSuperBoutiqueDePotions"; 
let boutique_ouverte = true;

if (boutique_ouverte) {
  console.log("Bienvenue dans la boutique "+ nom_boutique +" , Aventurier ! 🎉");
} else {
  console.log("La boutique  "+ nom_boutique +"est fermée, revenez plus tard Aventurier ! 😴");
}

function affichage(
    nom_boutique,
    nom_sorcier,
    prix_potion_soins,
    nb_potion_soins
  ) {
    console.log(
      "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔"
    );
    console.log("\n1. Le nom de la boutique");
    console.log("\n2. Le nom du Sorcier");
    console.log("\n3. Le prix d'un potion de soin");
    console.log("\n4. La quantité de potions de soin");
  
    const choix = parseInt(prompt("Votre choix (entre 1 et 4) : "));
  
    switch (choix) {
      case 1:
        console.log(nom_boutique);
        break;
      case 2:
        console.log(nom_sorcier);
        break;
      case 3:
        console.log(prix_potion_soins);
        break;
      case 4:
        console.log(nb_potion_soins);
        break;
      default:
        console.log(
          "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
        );
    }
  }
