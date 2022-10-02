import { atom } from "recoil";

export const menuAtom = atom({
  key: "menuAtom",
  default: "",
});

export const isFilterTabOpenAtom = atom({
  key: "isFilterTabOpenAtom",
  default: false,
});
