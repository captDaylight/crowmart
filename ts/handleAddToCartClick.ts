import { addToCart } from './store';

export default (event: PointerEvent) => {
  const { parentElement } = event.target as HTMLButtonElement;

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
