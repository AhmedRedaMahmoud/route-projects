var quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzy" },
    { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
];

var quoteText = document.getElementById("quote");
var authorText = document.getElementById("author");
var newQuoteButton = document.getElementById("new-quote");


quoteText.textContent = "";
authorText.textContent = "";


function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.quote}"`;
    authorText.textContent = `-- ${randomQuote.author}`;
}


newQuoteButton.onclick = displayRandomQuote;

