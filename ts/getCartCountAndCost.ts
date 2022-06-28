import { getCart } from './store';

export default (): {
  cartCount: number,
  cartCost: string,
} => {
  const cart = getCart();

  const cartCount = cart
    .reduce((prev, crowItem) => prev + crowItem.quantity, 0);

  const cartCost = cart
    .reduce((prev, crowItem) => prev + crowItem.price * crowItem.quantity, 0)
    .toFixed(2);

  return {
    cartCount,
    cartCost,
  };
};
