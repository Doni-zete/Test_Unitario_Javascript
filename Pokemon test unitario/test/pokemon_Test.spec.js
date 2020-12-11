let chai = require("chai");
  let expect =chai.expect;  

var Pokemon =require("../lib/pokemon");

describe("pokemon lib", () => {
    describe("pokemonBatalha", () => {
        it("Squirtle ganha do charizard", () => {
            expect(Pokemon.pokemonBatalha("Squirtle", "charizard")).to.equal("Squirtle");
        });
        it("")

    });

});
