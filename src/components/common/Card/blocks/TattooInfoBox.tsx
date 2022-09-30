import React from "react";
import styled from "styled-components";

import UserProfile from "./UserProfile";

interface IProps {
  name: string;
  artist: string;
  artistImgUrl: string;
}

function TattooInfoBox({ name, artist, artistImgUrl }: IProps) {
  return (
    <Container>
      <TattooName>{name}</TattooName>
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
`;

const TattooName = styled.h2`
  font-size: 24px;
  margin: 0 0 15px 0;
`;
