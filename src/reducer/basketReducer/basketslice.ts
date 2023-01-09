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
  isAdd: boolean;
  isAddAmount: number;
  discont: number;
}

const initialState: IBasketState = {
  basketProducts: [],
  productIndex: NaN,
  isAdd: false,
  isAddAmount: 0,
  discont: 0,
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
    isAddtoBasket(state, action: PayloadAction<string>) {
      const toggleProduct = state.basketProducts.find(
        (product) => product.id === action.payload
      );
      if (toggleProduct) {
        state.isAdd = true;
        state.isAddAmount = toggleProduct.amount;
      } else {
        state.isAdd = false;
      }
    },
    addtoBasketTrue(state, action: PayloadAction<boolean>) {
      state.isAdd = action.payload;
    },
    addDiscont(state, action: PayloadAction<number>) {
      state.discont = state.discont + action.payload;
    },
    deleteDiscont(state, action: PayloadAction<number>) {
      state.discont = state.discont - action.payload;
    },
  },
});

export const {
  addProduct,
  changeProductAmount,
  deleteProduct,
  findProductIndex,
  isAddtoBasket,
  addtoBasketTrue,
  clearBasket,
  addDiscont,
  deleteDiscont,
} = basketSlice.actions;
export default basketSlice.reducer;
