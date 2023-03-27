import CustomNavBar from "../../common/CustomNavBar";
import FilterTabMenuBox from "./Filter/FilterTabMenuBox";
import SelectMenuBox from "../../common/CustomNavBar/blocks/SelectMenuBox";

const exploreMenu = ["Designs", "Artists", "Images"];

function NavBar() {
  return (
    <CustomNavBar>
      <FilterTabMenuBox />
      <SelectMenuBox menu={exploreMenu} />
    </CustomNavBar>
  );
}

export default NavBar;
