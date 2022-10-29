import React from "react";
import styled from "styled-components";

import UserProfile from "../atoms/UserProfile";

interface IProps {
  type: string;
  name: string;
  artist: string;
  artistImgUrl: string;
}

function TattooInfoBox({ type, name, artist, artistImgUrl }: IProps) {
  return (
    <Container>
      {type === "art" && <h2 className="tattooName">{name}</h2>}
      <UserProfile
        type={type}
        labelText="Artist"
        userName={artist}
        userImgUrl={artistImgUrl}
      />
    </Container>
  );
}

export default TattooInfoBox;

const Container = styled.div`
  width: 50%;

  .tattooName {
    font-size: 20px;
    margin: 0 0 15px 0;
  }
`;
