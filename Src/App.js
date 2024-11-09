export class Main {

    minutesBy1(seconds = 0) {
        let color = 'black'; 

        
        if (seconds === 60) {
            color = 'yellow'; 
        }

        return color;
    }
}
