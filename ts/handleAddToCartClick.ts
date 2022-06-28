import { addToCart } from './store';

export default (ev: Event) => {
  const { parentElement } = ev.target as HTMLButtonElement;

  const id = parentElement?.dataset?.itemId;
  const name = parentElement?.querySelector('h4')?.innerHTML;
  const price = parentElement?.querySelector('h5')?.innerHTML;
  const category = parentElement?.dataset?.category;

  if (name && price && id && category) {
    addToCart({
      id,
      name,
      price: Number(price.replace(/\$/g, '')),
      quantity: 1,
      categories: [category],
    });
  }
};
