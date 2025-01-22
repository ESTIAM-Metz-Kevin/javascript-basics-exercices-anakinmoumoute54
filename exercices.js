const nom_sorcier = "Archibald";
const nom_boutique = "MaSuperBoutiqueDePotions";
let nb_potion_soins = 1;
let prix_potion_soins = 2;
let boutique_oc = true;
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

  
  function demande_potion_soin(
    prix_potion_soins,
    nb_potion_soins,
    argent_aventurier
  ) {
    const nb_achat = prompt(
      "Combien de potion(s) de soin souhaitez-vous acheter ?"
    );
    const prix_final = nb_achat * prix_potion_soins;
    if (nb_achat <= nb_potion_soins && prix_final <= argent_aventurier) {
      return (
        "Le prix de " +
        nb_achat +
        " potions de soins : " +
        +prix_final +
        " 🪙 mon cher Aventurier. 💸"
      );
    } else {
      return "Vous ne pouvez pas acheter autant de potions";
    }
  }

let bourseAventurier = 100;
let stockPotions = 10;
let prixPotion = 15;

let quantiteDemandee = 5;

if (quantiteDemandee > stockPotions) {
    console.log("Il n'y a pas assez de potions en stock.");
} else if (quantiteDemandee * prixPotion > bourseAventurier) {
    console.log("Vous n'avez pas assez d'argent pour acheter ces potions.");
} else {

    stockPotions -= quantiteDemandee;
    bourseAventurier -= quantiteDemandee * prixPotion;

    console.log(`Achat réussi ! Il reste "+ stockPotions +" potions en stock.`);
    console.log(`Il vous reste "+ bourseAventurier +" pièces d'or.`);
}


let potionsBoutique = ["Potion de soin", "Potion de force", "Potion d'endurance"];
console.log(potionsBoutique);
for (let i = 0; i < potionsBoutique.length; i++) {
  console.log("Nous avons de la " + potionsBoutique[i] + " !");
}

potionsBoutique.push("Potion d'invisibilité");
console.log(potionsBoutique);
