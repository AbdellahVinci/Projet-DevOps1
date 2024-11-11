export class Main {
    getSimpleMinutes(minutes) {
        let lamps = ['X', 'X', 'X', 'X']; 
        const count = minutes % 5; 
    
        for (let i = 0; i < count; i++) {
          lamps[i] = 'Y'; 
        }
        return console.log(lamps);
      }
 }