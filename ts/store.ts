import { CrowItem } from './types';

const getCart = (): CrowItem[] => {
  const cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const addToCart = (crowItem: CrowItem): CrowItem[] => {
  const initialCart = getCart();
  const updatedCart = [...initialCart, crowItem];
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  return updatedCart;
};

export {
  getCart,
  addToCart,
};
