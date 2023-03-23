import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserAPI from "../../../../api/user";
import Description from "../../atom/RankingBox.tsx/Description";
import RankingBar from "../../atom/RankingBox.tsx/RankingBar";

function RankingBox() {
  const [rankingUsers, setRankingUsers] = useState<any>([]);
  const getRankingUsers = async () => {
    const res = await UserAPI.getRankingUsers();
    console.log(res?.data);
    return res;
  };
  useEffect(() => {
    const res = getRankingUsers();
    setRankingUsers(res);
  }, []);

  return (
    <Wrap>
      <button onClick={getRankingUsers}>랭킹유저</button>
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
      <RankingBar rank="1" artist="Jane Cooper" type="올드스쿨, 뉴스쿨" />
    </Wrap>
  );
}

export default RankingBox;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 400px;
  margin-right: 20px;
`;
