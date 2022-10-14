import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface IProps {
  userName: string;
  tattooTitle: string;
  ownerId: string;
  // imgUrl: string;
}

function TattooName({ userName, tattooTitle, ownerId }: IProps) {
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{tattooTitle}</h1>
      <h1>owner by {ownerId}</h1>
      <h1>current price</h1>
    </div>
  );
}

export default TattooName;
