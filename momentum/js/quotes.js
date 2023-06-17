const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any other.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman",
    },
    {
        quote: "The only thing worse than starting something and failing … is not starting something.",
        author: "Seth Godin",
    },
]

// 새로고침을 할 때마다 명언을 랜덤으로 보여줘야 한다. 
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText = todaysQuote.author;

