// funzione per generare un random number
function getRandomNumber(max,howManyNumbers){
    let randomNumbers = [];
    for(let i = 0; i < howManyNumbers; i++){
        randomNumber = Math.floor(Math.random() * max)+ 1;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}