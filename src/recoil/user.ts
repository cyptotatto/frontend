import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";

const { persistAtom } = recoilPersist();

export const accountAtom = atom({
  key: `accountAtom${v1()}`,
  default: "",
  effects_UNSTABLE: [persistAtom],
});
