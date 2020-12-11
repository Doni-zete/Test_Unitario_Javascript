let chai = require("chai");
let expect = chai.expect;
let Pokemon = require("../lib/pokemon");
//testando a biblioteca 
describe("pokemon lib", () => {
    //testando a pokemonbatalha
    describe("pokemonBatalha", () => {
        //define quem ganha
        it("Squirtle ganha do charizard", () => {
            //expectativa esperando o resultado definido pela função pokemonBatalha
            expect(Pokemon.pokemonBatalha("Squirtle", "charizard")).to.equal("Squirtle");
        });

        it("charizard perde do Squirtle", () => {
            expect(Pokemon.pokemonBatalha("charizard", "Squirtle")).to.equal("Squirtle");
        });

        it("pikachu ganha  do butterfree ", () => {
            expect(Pokemon.pokemonBatalha("pikachu", "butterfree ")).to.equal("pikachu");
        });

    });
    //soma da stamina
    describe("soma staminas", () => {
        it("soma 1 com 4", () => {
            //verifica se o numero 1+4=5
            expect(Pokemon.staminaSum(1, 4)).to.equal(5);+
        });
        //verifica se o numero 5+8=14
        it("soma 5 com 8", () => {
            expect(Pokemon.staminaSum(5, 9)).to.equal(14);
        });

        it("soma 13 com 20", () => {
            expect(Pokemon.staminaSum(13, 20)).to.equal(7);
        });

    });
});

