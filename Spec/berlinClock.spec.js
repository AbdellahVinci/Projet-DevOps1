import { Main } from "../Src/App.js"; 

describe("The function should return the color of the lamp ", function() {

    const result = new Main();


    it("Initially, all lamps are off  ,it should return (XXXX)", function() {

       

        expect(result.getSimpleMinutes(0));
    });

    it("should return (YXXX) when the input is 1", function() {

        
        
        expect(result.getSimpleMinutes(1));
    });

    
    it("should return (YYXX) when the input is 2", function() {

        
        
        expect(result.getSimpleMinutes(2));
    });

    it("should return (YYYX) when the input is 3", function() {

        
        
        expect(result.getSimpleMinutes(3));
    });
    
    it("should return (YYYY) when the input is 4", function() {

       
        
        expect(result.getSimpleMinutes(4));
    }); 
   
    it("should retrun (JXXXXXXXXXX) when the input is 5", function() {
        
        expect(result.getMinutesFive(5));
    });

    it("should retrun (JJRXXXXXXXX) when the input is 15", function() {
        
        expect(result.getMinutesFive(15));
    });
    

    it("should retrun (JJRJJRJJRXX) when the input is 45", function() {
        
        expect(result.getMinutesFive(45));
    });





   
});
