import type { NextPage } from "next";
import styled from "styled-components";
import MainBox from "../src/components/home/template/MainBox";
import ArtistRanking from "../src/components/home/template/ArtistRanking";
import DesignRanking from "../src/components/home/template/DesignRanking";

const Home: NextPage = () => {
  return (
    <Wrap>
      <MainBox />
      <ArtistRanking />
      <DesignRanking />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  padding-top: 80px;
  background-image: url("/assets/main_img.svg");
  height: 980px;
  min-width: 350px;
`;
