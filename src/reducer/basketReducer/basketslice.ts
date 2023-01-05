import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  id: string;
  amount: number;
  price: number;
}

export interface IBasketState {
  basketProducts: IProduct[];
  productIndex: number;
}

const initialState: IBasketState = {
  basketProducts: [],
  productIndex: NaN,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.basketProducts.push({
        id: action.payload.id,
        amount: action.payload.amount,
        price: action.payload.price,
      });
    },
    changeProductAmount(state, action: PayloadAction<IProduct>) {
      const toggleProduct = state.basketProducts.find(
        (product) => product.id === action.payload.id
      );
      if (toggleProduct) {
        toggleProduct.amount = action.payload.amount;
      }
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.basketProducts = state.basketProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearBasket(state) {
      state.basketProducts = [];
    },
    findProductIndex(state, action: PayloadAction<string>) {
      state.productIndex = state.basketProducts.findIndex(
        (product) => product.id === action.payload
      );
    },
  },
});

export const {
  addProduct,
  changeProductAmount,
  deleteProduct,
  findProductIndex,
} = basketSlice.actions;
export default basketSlice.reducer;
