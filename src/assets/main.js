/*
const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

const app = null || document.getElementById('app');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;  
}


(async () => {
    try {
        const coins = await fetchData(API);
        console.log(coins);
        
    } catch (error) {
        console.log(error)
    }
})
*/


//Call to the Api and sampling on screen with the asynchronous method "then".

function obtainCoins() {
  const apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  fetch(apiUrl)
    .then((res) => res.json())
    .then((resJson) => {
      const coins = resJson;
      console.log(coins);
      showCoin(coins);
    })
    .catch((error) => error);
}

obtainCoins();

function showCoin(coins) {
  const resultDataElement = document.getElementById('Table-content-coins-all');

  let resultHTML = '';

  for (let i = 0; i < coins.length; i++) {
    const currentPrice = coins[i].current_price;
    const priceChange = coins[i].price_change_percentage_24h;
    const totalSupply = coins[i].total_supply;
    const symbol = coins[i].symbol.toUpperCase();

    let supply_number = ('000000000' + totalSupply).slice(-9);

    const currentPriceColor = currentPrice < 0 ? 'red' : '#00EBA6';
    const priceChangeColor = priceChange < 0 ? 'red' : '#00EBA6';
    const totalSupplyColor = totalSupply < 0 ? 'red' : '#00EBA6';

    resultHTML += `
      <div class="order border">
        <div class="order-container">
          <div class="Table-content-coins-left">
            <p class="id">${formatNumber(i + 0)}</p>
            <img src="${coins[i].image}" alt="">
            <p>${coins[i].name}</p>
            <span class="symbol">${symbol}</span>
          </div>
          <div class="Table-content-coins-right">
            <p class="price" style="color: ${currentPriceColor}">${currentPrice}</p>
            <p class="price_change" style="color: ${priceChangeColor}">${priceChange}</p>
            <p class="supply" style="color: ${totalSupplyColor}">${supply_number}</p>
          </div>
        </div>
      </div>
    `;
  }

  resultDataElement.innerHTML = resultHTML;

  const coinFilterInput = document.getElementById('coin-filter');
  coinFilterInput.addEventListener('input', function () {
    const filterText = coinFilterInput.value.toLowerCase();
    filterCoins(filterText);
  });
}

function filterCoins(filterText) {
  const coins = document.querySelectorAll('.order');

  coins.forEach(function (coin) {
    const coinName = coin.querySelector('p:nth-child(3)').textContent.toLowerCase();

    if (coinName.includes(filterText)) {
      coin.style.display = 'block';
    } else {
      coin.style.display = 'none';
    }
  });
}

function formatNumber(number) {
  if (number < 3) {
    return (number + 1).toString();
  } else {
    return (number + 1);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});



