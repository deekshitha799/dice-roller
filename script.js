const inputDice = document.getElementById("inputDice");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");


function rollDice(){
    const values = [];
    const images = [];

    for(let i = 0; i < inputDice.value; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        images.push(`<img src= "assets/${value}.png" alt="${value}.png">`)
    }

    diceResult.textContent = `Result: ${values.join(', ')}`
    diceImages.innerHTML = `${images.join(' ')}`
}

