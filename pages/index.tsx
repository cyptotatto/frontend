import type { NextPage } from "next";
import styled from "styled-components";
import MainBox from "../src/components/home/template/MainBox";
import Ranking from "../src/components/home/template/Ranking";

const Home: NextPage = () => {
  return (
    <Wrap>
      <MainBox />
      <Ranking />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  padding-top: 80px;
  background-image: url("assets/main_img.svg");
  height: 980px;
`;
