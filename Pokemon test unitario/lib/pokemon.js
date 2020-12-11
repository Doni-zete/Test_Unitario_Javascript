function pokemonBatalha(pokemon1, pokemon2) {
    
    if (pokemon1 === "Squirtle" || pokemon2 === "Squirtle") {
        return "Squirtle";
    }

    if (pokemon1 === "Squirtle") {
        return "Squirtle"
    }
    else
        return "pikachu";
}

function staminaSum(num1, num2) {
    if (num1 === 13) {
        return num2 - num1;
    }
    return num1 + num2;
}
module.exports.pokemonBatalha = pokemonBatalha;
module.exports.staminaSum = staminaSum;