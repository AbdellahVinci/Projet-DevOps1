import { Main } from "../Src/App.js"; 

describe(" The function should return the color of the lamp ", function() {

  

  it("Initially, the lamp is off (black)", function() {
    const result = new Main();
     
      expect(result.minutesBy1()).toBe("black");
  });

  it("“After 1 minute, the lamp should light up orange”", function() {
    const result = new Main();
      
      const color = result.minutesBy1(60); 
      expect(color).toBe("yellow");
  });
});
