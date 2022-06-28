import { addToCart } from './store';

export default (ev: Event) => {
  const { parentElement } = ev.target as HTMLButtonElement;

  const id = parentElement?.dataset?.itemId;
  const name = parentElement?.querySelector('h4')?.innerHTML;
  const price = parentElement?.querySelector('h5')?.innerHTML;

  if (name && price && id) {
    addToCart({
      id,
      name,
      price: Number(price.replace(/\$/g, '')),
    });
  }
};
