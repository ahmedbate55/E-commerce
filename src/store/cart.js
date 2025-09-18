import { create } from "zustand";
export const cart = create((set) => ({
  modal: false,
  cartInfo: [],
  openModal: () => set(() => ({ modal: true })),
  CloseModal: () => set(() => ({ modal: false })),
  addToCart: (newItem) =>
    set((state) => ({ cartInfo: [...state.cartInfo, newItem] })),
  removeFromCart: (indexOfItem) =>
    set((state) => ({ state: state.cartInfo.splice(indexOfItem,1) })),
  incraseNum: (index) =>
    set((state) => {
      let numQty = [...state.cartInfo];
      numQty[index].qty++;
      return { cartInfo: numQty };
    }),
  decreasQty: (index) =>
    set((state) => {
      let qtyValue = [...state.cartInfo];
      if (qtyValue[index].qty > 1) {
        qtyValue[index].qty--;
      }
      return { cartInfo: qtyValue };
    }),
}));
