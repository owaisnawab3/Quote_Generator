let quote = document.getElementById("Quote");
let author = document.getElementById("Author");
let btn = document.getElementById("New_Quote_Btn");


const api_Url = 'https://api.quotable.io/random';

async function getQuote(url){
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
//    console.log(data.author)
//    console.log(data.content)
   author.innerText = "__"+data.author
   quote.innerText = '"'+ data.content + '"';
}

getQuote(api_Url)

window.addEventListener('load', getQuote)
btn.addEventListener('click', getQuote)

