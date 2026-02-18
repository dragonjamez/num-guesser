let randomNumber = Math.floor(Math.random() * 10) + 1; 
x = prompt("Guess a number between 1 and 10");
xy = 1
while (x != randomNumber) {
    if (isNaN(x))
        x = prompt("no num u idiot")
    if (x > randomNumber)
        x = prompt("lower")
    if (x < randomNumber)
        x = prompt("higher")
    xy++
}
alert("well you finally got it after " + xy + " tries")