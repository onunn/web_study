const quotes = [
    {
        quote: "Energy is eternal delight.",
        author: "William Blake",
    },
    {
        quote: "You create your opportunities by asking for them.",
        author: "Patty Hansen",
    },
    {
        quote: "Force is all-conquering, but its victories are short-lived.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Kites rise highest against the wind - not with it.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "To freely bloom - that is my definition of success.",
        author: "Gerry Spence",
    },
    {
        quote: "Your happiness is defined by what makes your spirit sing.",
        author: "Nancy Sullivan",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
    {
        quote: "Early morning hath gold in its mouth.",
        author: "Benjamin Franklin",
    },
    {           
        quote: "Prediction is very difficult, especially about the future.",
        author: "Niels Bohr",
    },
]

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todayQuote.quote)

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;