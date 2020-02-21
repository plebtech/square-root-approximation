// applying Heron of Alexandria's formula for approximating a square root through successive averaging.
// stops at four trailing decimal figures (via toFixed(4)), i.e. when two successive guesses are within thousandths of each other.
approximateRoot = square => {
    let guess = Math.random() * square; // begin from a random point between 0 and the square.
    let lastGuess = 0;
    while (guess.toFixed(4) != lastGuess.toFixed(4)) {
        console.log(guess);
        lastGuess = guess;
        guess = (guess + (square / guess)) / 2;
    }
    console.log(guess);
}
approximateRoot(4);