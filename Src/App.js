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
                lamps[i] = 'Y';
            }
        }
        return console.log(lamps);
    }
    
    getSimpleHours(hours){
      let lamps = ['X', 'X', 'X', 'X']; 
      const count =hours  % 5; 
  
      this.turnOnRedLamps(count, lamps);
    
      return console.log(lamps); 
    }




    
    getHoursFive(hours){
      let lamps = ['X', 'X', 'X', 'X']; 
      const count = Math.floor(hours / 5);
  
      this.turnOnRedLamps(count, lamps);

      return console.log(lamps); 
    }
 


    getSeconds(seconds){
        let lamp = ['X'];

        lamp = this.isEvenNumber(seconds, lamp);
        
        return console.log(lamp);

    }




    getBerlinClock(hours, minutes, seconds) {
        const berlinClock = {
            seconds: this.getSeconds(seconds),
            fiveHourLamps: this.getHoursFive(hours),
            simpleHourLamps: this.getSimpleHours(hours),
            fiveMinuteLamps: this.getMinutesFive(minutes),
            simpleMinuteLamps: this.getSimpleMinutes(minutes),
        };
    
        return berlinClock; 
    }
    



    isEvenNumber(seconds, lamp) {
        for (let i = 0; i < 1; i++) {
            if (seconds % 2 === 0) {
                lamp = ['R'];
            }
        }
        return lamp;
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