const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');

const loader = document.getElementById('loader');

var saveQuoteArray = [];
console.log(saveQuoteArray);
// // Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}


function newQuoteGenerate() {
  const randomQuotePick = saveQuoteArray[Math.floor(Math.random() * saveQuoteArray.length)]
  console.log('randomQuotePick',randomQuotePick);
  if(!randomQuotePick.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = randomQuotePick.author;
  }
  console.log(randomQuotePick.text.length);
  
  if(randomQuotePick.text > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
}
  quoteText.textContent = randomQuotePick.text;
  complete();
 }

async function getQuote() {
  
  try {
    loading();
    const data = await fetch('https://type.fit/api/quotes');
    saveQuoteArray =await data.json(); 
    newQuoteGenerate()
    console.log(saveQuoteArray);
    // console.log(api);
  } catch(error){
    console.log(error);
  }
 }


 async function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`
    window.open(tweetUrl, '_blank')
   }


 getQuote()
addEventListener('click',newQuoteGenerate)
addEventListener('click',tweetQuote)

































