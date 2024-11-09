import { Main } from "../Src/App.js"; 

describe(" The function should return the color of the lamp ", function() {


  const result = new Main();


  it("Initially, the lamp is off (black)", function() {
    
     
      expect(result.minutesBy1()).toBe("black");
  })

  it("“After 1 minute, the lamp should light up orange”", function() {
    
      
      const color = result.minutesBy1(60); 
      expect(color).toBe("yellow");
  });
});
