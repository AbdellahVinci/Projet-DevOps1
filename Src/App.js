export class Main {
    getSimpleMinutes(minutes) {
        let lamps = ['X', 'X', 'X', 'X']; 
        const count = minutes % 5; 
    
        for (let i = 0; i < count; i++) {
          lamps[i] = 'Y'; 
        }
        return console.log(lamps); 
    }

    getMinutesFive(minutes){
        let lamps = ['X','X','X','X','X','X','X','X','X','X','X'];
        const count = Math.floor(minutes / 5);

        for(let i = 0; i < count; i++){
            if((i + 1) % 3 === 0){
                lamps[i] = 'R';
            } else {
                lamps[i] = 'J';
            }
        }
        return console.log(lamps);
    }
 }