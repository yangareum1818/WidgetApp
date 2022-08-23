const quotes = [
	{
		quote : "The opinion which other people have of you is their problem, not yours.",
		author : "Eille",
	},
	{
		quote : "You'll never find a rainbow if you're looking down.",
		author : "Charlie Chaplin",
	},
	{
		quote : "If you can dream it, you can do it.",
		author : "Walt Disney",
	},
	{
		quote : "My life did not please me, so I created my life",
		author : "Coco Chanel",
	},
	{
		quote : "Love dies only when growth stops.",
		author : "Pearl S. Buck",
	},
	{
		quote : "There is more to life than increasing it's speed.",
		author : "Mahatma Gandhi",
	},
	{
		quote : "Everything is practice.",
		author : "Pele",
	},
	{
		quote : "Without haste, but without rest.",
		author : "Johann Woifgang von Goethe",
	},
	{
		quote : "Think rich, look poor.",
		author : "Andy Warhol",
	},
	{
		quote : "It's all about the journey, not the outcome.",
		author : "Carl Lewis",
	}
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

// 몇개의 array가 들어가든 length가 갯수를 세어줘서 random 하게 반환됨
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

function wiseSayingChange() {
	const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

	quote.innerText = toDaysQuote.quote;
	author.innerText = toDaysQuote.author;
}
wiseSayingChange();
setInterval(wiseSayingChange, 5000);
