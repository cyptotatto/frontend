import { atom } from "recoil";
import { v1 } from "uuid";
export const menuAtom = atom({
  key: "menuAtom",
  default: "",
});

export const walletAtom = atom({
  key: "walletAtom",
  default: "",
});

export const isFilterTabOpenAtom = atom({
  key: `isFilterTabOpenAtom${v1()}`,
  default: false,
});

export const currencyManagerAtom = atom({
  key: `currencyManagerAtom${v1()}`,
  default: false,
});
