import React from "react";
import styled from "styled-components";

import UserProfile from "../atoms/UserProfile";

interface IProps {
  name: string;
  artist: string;
  artistImgUrl: string;
}

function TattooInfoBox({ name, artist, artistImgUrl }: IProps) {
  return (
    <Container>
      <h2 className="tattooName">{name}</h2>
      <UserProfile
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
