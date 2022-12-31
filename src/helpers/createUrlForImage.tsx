function createUrlForImage(numericOfImage: string): string {
  const urlImage = `https://i.dummyjson.com/data/products/${numericOfImage}/thumbnail.jpg`;
  return urlImage;
}

export default createUrlForImage;
