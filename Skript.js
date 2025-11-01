let NumberToGues = Math.round(Math.random() *100);
    alert("Error " + NumberToGues * 10);
let tries = 0;
function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;
if(NumberToGues == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen!!! 🥳🎉';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti()
        jsConfetti.addConfetti({
        emojis: ['❄', '🥳', '❄', '🥳', '❄', '🥳'],});
    }


if(NumberToGues > myNumber.value) {
        headline.innerHTML = 'Deine zahl ist zu Klein';

}
if(NumberToGues < myNumber.value) {
        headline.innerHTML = 'Deine zahl ist zu Groß';
}
myNumber.value ='';
}
