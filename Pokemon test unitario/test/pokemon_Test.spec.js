let chai = require("chai");
let expect = chai.expect;
let Pokemon = require("../lib/pokemon");

describe("pokemon lib", () => {
    describe("pokemonBatalha", () => {
        it("Squirtle ganha do charizard", () => {
            expect(Pokemon.pokemonBatalha("Squirtle", "charizard")).to.equal("Squirtle");
        });

        it("charizard perde do Squirtle", () => {
            expect(Pokemon.pokemonBatalha("charizard", "Squirtle")).to.equal("Squirtle");
        });

        it("pikachu ganha  do butterfree ", () => {
            expect(Pokemon.pokemonBatalha("pikachu", "butterfree ")).to.equal("pikachu");
        });

           it("bubassauro ganha de onix",() =>{
               expect(Pokemon.pokemonBatalha("bubassauro",onix)).to.equal("bubassauro");
           });

    });
describe("soma staminas",()=>{
it("soma 1 com 4",()=>{
    expect(Pokemon.staminaSum(1,4)).to.equal(5);
});

});


});
