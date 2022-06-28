import handleAddToCartClick from './handleAddToCartClick';
import getCartCountAndCost from './getCartCountAndCost';
import postEventRequest from './postEventRequest';
import generateRequestData from './generateRequestData';

// send initial request to Black Crow
postEventRequest(
  'view',
  generateRequestData(
    'CrowMart',
    window.location.pathname === '/' ? 'home' : 'other',
    'HARDCODED_VISITOR_ID', // TODO
  ),
).then((res) => {
  console.log('BLACK CROW EVENT RESPONSE: ');
  console.log('  ', res.message);
  console.log('   version:    ', res.version);
  console.log('   timestamp:  ', res.request_timestamp);
});

// attach event listener to add-to-cart button
document.querySelectorAll('.crow-item button').forEach((crowItemButton) => {
  crowItemButton.addEventListener('click', handleAddToCartClick);
});

// Update values on cart page
const countEl = document.getElementById('cart-item-count');
const costEl = document.getElementById('cart-cost');
if (countEl && costEl) {
  const { cartCount, cartCost } = getCartCountAndCost();
  countEl.innerHTML = cartCount.toString(10);
  costEl.innerHTML = cartCost;
}
