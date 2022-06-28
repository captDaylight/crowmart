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
  let updatedCart: CrowItem[];

  if (initialCart.findIndex((item) => item.id === crowItem.id) > -1) {
    // update the quantity of existing Crow Item
    updatedCart = initialCart.map((item) => {
      if (item.id !== crowItem.id) {
        return item;
      }
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });
  } else {
    // add crow item
    updatedCart = [...initialCart, { ...crowItem, quantity: 1 }];
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));

  return updatedCart;
};

export {
  getCart,
  addToCart,
};
