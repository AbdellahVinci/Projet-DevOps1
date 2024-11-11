import { Main } from "../Src/App.js"; 

describe("The function should return the color of the lamp ", function() {


    it("Initially, all lamps are off  ,it should return (XXXX)", function() {

        const result = new Main();

        expect(result.getSimpleMinutes(0));
    });

    it("should return (YXXX) when the input is 1", function() {

        const result = new Main();
        
        expect(result.getSimpleMinutes(1));
    });

    
    it("should return (YYXX) when the input is 2", function() {

        const result = new Main();
        
        expect(result.getSimpleMinutes(2));
    });

    it("should return (YYYX) when the input is 3", function() {

        const result = new Main();
        
        expect(result.getSimpleMinutes(3));
    });
    it("should return (YYYY) when the input is 4", function() {

        const result = new Main();
        
        expect(result.getSimpleMinutes(4));
    });
   

    





   
});
