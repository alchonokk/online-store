export function createUrlForImage(numericOfImage: string): string {
  const urlImage = `https://i.dummyjson.com/data/products/${numericOfImage}/thumbnail.jpg`;
  return urlImage;
}

export function createUrlForImages(
  numericOfImage: string,
  numberImage: string
): string {
  const urlImage = `https://i.dummyjson.com/data/products/${numericOfImage}/${numberImage}.jpg`;
  return urlImage;
}
