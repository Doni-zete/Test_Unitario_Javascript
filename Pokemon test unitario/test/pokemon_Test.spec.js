let chai = require("chai");
let expect = chai.expect;
let Pokemon = require("../lib/pokemon");

describe("pokemon lib", () => {
    describe("pokemonBatalha", () => {
        it("Squirtle ganha do charizard", () => {
            expect(Pokemon.pokemonBatalha("Squirtle", "charizard")).to.equal("Squirtle");
        });
        it("pikachu ganha  do Evee", () =>{
            expect(Pokemon.pokemonBatalha("pikachu", "Squirtle")).to.equal("pikachu");
        });
});

});
