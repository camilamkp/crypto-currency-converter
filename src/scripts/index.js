
const criptoElement = document.getElementById('cripto');
const currencyElement = document.getElementById('currency');

const buttonElement = document.getElementById('button');

const quantityElement = document.getElementById('quantity');
const resultElement = document.getElementById('result');

buttonElement.addEventListener('click', ()=>
{
    let number = quantityElement.value;
    const url = `https://api.cryptonator.com/api/ticker/
    ${criptoElement.value.toLowerCase()}
    -
    ${currencyElement.value.toLowerCase()}`;
    
    console.log(url);

    fetch(url).then((data) =>
    {
        return data.json();
    }).then((jsonData) =>
    {
        resultElement.value = number*jsonData.ticker.price;
    });
})