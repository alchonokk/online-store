
const AddtoCart = (productsNumber: number)=>(event: React.MouseEvent<HTMLElement>) => {
  const target = event.target as HTMLElement;
  if (target.className ==='add-to-cart-title' ) {
    target.textContent = 'Added to card';
    console.log(productsNumber);
  }
  if ( target.className ==='add-to-cart') {
    target.firstElementChild!.textContent = 'Added to card';
    console.log(productsNumber);
  }
}

export { AddtoCart}