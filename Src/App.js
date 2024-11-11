export class Main {
    getSimpleMinutes(minutes) {
        let lamps = ['X', 'X', 'X', 'X']; // Initialisation avec 4 lampes éteintes ('X')
        const count = minutes % 5; // Nombre de lampes à allumer
    
        for (let i = 0; i < count; i++) {
          lamps[i] = 'Y'; // On allume la lampe (en jaune)
        }
        return console.log(lamps); // Convertit le tableau en une chaîne de caractères
      }
 }