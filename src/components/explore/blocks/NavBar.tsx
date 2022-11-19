import { useEffect, useState } from "react";

import { useSetRecoilState } from "recoil";
import { selectedMenuAtom } from "../../../recoil/menu";

import CustomNavBar from "../../common/CustomNavBar";
import FilterTabMenuBox from "./Filter/FilterTabMenuBox";
import SelectMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const exploreMenu = ["도안", "아티스트", "타투 이미지"];

function NavBar() {
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);

  useEffect(
    () => setSelectedMenu(exploreMenu[selectedMenuIdx]),
    [selectedMenuIdx, setSelectedMenu]
  );

  return (
    <CustomNavBar>
      <FilterTabMenuBox />
      <SelectMenuBox
        menu={exploreMenu}
        selectedMenuIdx={selectedMenuIdx}
        setSelectedMenuIdx={setSelectedMenuIdx}
      />
    </CustomNavBar>
  );
}

export default NavBar;
