export class Main {
    getSimpleMinutes(minutes) {
        let lamps = ['X', 'X', 'X', 'X']; 
        const count = minutes % 5; 
    
        this.turnOnYellowLamps(count, lamps);
        return console.log(lamps); 
    }

    getMinutesFive(minutes){
        let lamps = ['X','X','X','X','X','X','X','X','X','X','X'];
        const count = Math.floor(minutes / 5);

        for(let i = 0; i < count; i++){
            if(this.isRedLampPosition(i)){
                lamps[i] = 'R';
            } else {
                lamps[i] = 'J';
            }
        }
        return console.log(lamps);
    }
    
    getSimpleHours(hours){
      let lamps = ['X', 'X', 'X', 'X']; 
      const count =hours  % 5; 
  
      this.turnOnYellowLamps(count, lamps);
      return console.log(lamps); 
    }



    getHoursFive(hours){
      let lamps = ['X', 'X', 'X', 'X']; 
      const count = Math.floor(hours / 5);
  
      this.turnOnRedLamps(count, lamps);

      return console.log(lamps); 
    }

  
    
    turnOnRedLamps(count, lamps) {
    for (let i = 0; i < count; i++) {
      lamps[i] = 'R';
    }
  }

  turnOnYellowLamps(count, lamps) {
    for (let i = 0; i < count; i++) {
      lamps[i] = 'Y';
    }
  }

    isRedLampPosition(i) {
        return (i + 1) % 3 === 0;
    }
    


  }