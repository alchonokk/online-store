import { createUrlForImage, createUrlForImages } from "./createUrlForImage";

describe("URL for image", () => {
  test("check url for image", () => {
    expect(createUrlForImage("1")).toBe(
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    );
  });

  test("check url for images", () => {
    expect(createUrlForImages("1", "1")).toBe(
      "https://i.dummyjson.com/data/products/1/1.jpg"
    );
  });
});
