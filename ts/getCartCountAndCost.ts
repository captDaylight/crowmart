import { getCart } from './store';

export default (): {
  cartCount: number,
  cartCost: string,
} => {
  const cart = getCart();

  const cartCost = cart
    .reduce((prev, crowItem) => prev + crowItem.price, 0)
    .toFixed(2);

  return {
    cartCount: cart.length,
    cartCost,
  };
};
