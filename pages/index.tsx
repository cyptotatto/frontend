import type { NextPage } from "next";
import styled from "styled-components";
import HomeTemplate from "../src/components/home/HomeTemplate";

const Home: NextPage = () => {
  return (
    <Wrap>
      <HomeTemplate />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  padding-top: 80px;
`;
