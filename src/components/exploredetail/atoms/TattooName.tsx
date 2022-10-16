import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import HeartBtn from "./HeartArtist";

import EthereumIcon from "../../../../public/assets/ethereum.svg";
interface IProps {
  userName: string;
  tattooTitle: string;
  ownerId: string;
  // imgUrl: string;
  price: string;
}

function TattooName({ userName, tattooTitle, ownerId, price }: IProps) {
  const [heart, setHeart] = useState(true);

  return (
    <div>
      <h1>{userName}</h1>

      <div>
        <h1>{tattooTitle}</h1>
        <HeartBtn isHeart={heart}></HeartBtn>
      </div>

      <h1>owner by {ownerId}</h1>

      <h1>current price</h1>

      <div>
        <EthereumIcon></EthereumIcon>
        <h1>{price}</h1>
      </div>
    </div>
  );
}

export default TattooName;
