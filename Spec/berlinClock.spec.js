import { Main } from "../Src/App.js"; 

describe("The function should return the color of the lamp ", function() {

    const result = new Main();

    afterEach(() => {
        console.log(" ");
    });

    

 // Step 1
 


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


    
    


    // Step 2

    
    it("should retrun (YXXXXXXXXXX) when the input is 5", function() {

        
        expect(result.getMinutesFive(5));


    });



    it("should retrun (YYRXXXXXXXX) when the input is 15", function() {
        
        
        expect(result.getMinutesFive(15));


    });

    

    it("should retrun (YYRYYRYYRXX) when the input is 45", function() {
        
        expect(result.getMinutesFive(45));


    });

    

    // Step 3
    

    it("Initially, all lamps are off  ,it should return (XXXX)", function() {

       

        expect(result.getSimpleHours(0));


    });




    it("should return (YXXX) when the input is 1", function() {

        
    
        expect(result.getSimpleHours(1));


    });

    
    it("should return (YYXX) when the input is 2", function() {

        
        
        expect(result.getSimpleHours(2));


    });


    it("should return (YYYX) when the input is 3", function() {

        
        
        expect(result.getSimpleHours(3));


    });
    

    it("should return (YYYY) when the input is 4", function() {

       
        
        expect(result.getSimpleHours(4));


    }); 

    

    // Step 4

    it("should retrun (RXXX) when the input is 5", function() {


        
        expect(result.getHoursFive(5));


    });




    it("should retrun (RRXX) when the input is 10", function() {


        
        expect(result.getHoursFive(10));


    });



    it("should retrun (RRRX) when the input is 15", function() {


        
        expect(result.getHoursFive(15));


    }); 



    // Step 5

    it("should retrun (X) when the input is 1", function() {


        
        expect(result.getSeconds(1));


    });


 
    it("should retrun (R) when the input is 4", function() {


        
        expect(result.getSeconds(4));


    });

    
    it("should retrun (X) when the input is 7", function() {

        
        expect(result.getSeconds(7));


    });


    it("should retrun (R) when the input is 10", function() {

        
        expect(result.getSeconds(10));


    });

    
    
    // Step 6

    it("should return the correct Berlin Clock representation for 15:30:10", function() {


        
        expect(result.getBerlinClock(15,30,10));


       
    });


    

    it("should return the correct Berlin Clock representation for 20:17:5", function() {


        
        expect(result.getBerlinClock(20,17,5));
         
        
    });



    it("should return the correct Berlin Clock representation for 00:49:54", function() {


        
        expect(result.getBerlinClock(0,49,54));


    });




   
 
   
});
