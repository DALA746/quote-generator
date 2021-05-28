let button = document.getElementById("button"); 
let displayText = document.getElementById("display"); 

button.addEventListener("click", function () {
    let quotes = [
        'The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
        'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs',
        'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen', 
        'We May Encounter Many Defeats But We Must Not Be Defeated. – Maya Angelou',
        'Whether You Think You Can Or Think You Can’t, You’re Right. – Quote By Henry Ford',
        'The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb',
        'A Room Without Books Is Like A Body Without A Soul. – Marcus Tullius Cicero',
        'Today’s Accomplishments Were Yesterday’s Impossibilities. – Robert H. Schuller',
        'I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time – Michael Phelps'
    ]
    
     let randomNumber = Math.floor(Math.random() * quotes.length);
         displayText.innerHTML = quotes[randomNumber];
})
