import handleAddToCartClick from './handleAddToCartClick';
import getCartCountAndCost from './getCartCountAndCost';

// attach listener to add to cart button
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
