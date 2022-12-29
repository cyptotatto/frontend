import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import UploadFileBox from "../blocks/UploadFileBox";
import UploadTitle from "../blocks/UploadTitle";
import UploadLink from "../blocks/UploadLink";
import UploadDescript from "../blocks/UploadDescript";
import SelectBox from "../atoms/SelectBox";
import UploadCategory from "../blocks/UploadCategory";
import UploadSell from "../blocks/UploadSell";
import UploadImgClassify from "../blocks/UploadImgClassify";
import CreateAPI from "../../../api/create";

//create
function CreateTemplate() {
  const axios = require("axios");

  const [img, setImage] = useState<any>();
  const [imgSrc, setImgSrc] = useState<any>("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [descript, setDescript] = useState<string>("");
  const [imgClassify, SetImgClassify] = useState(false);
  const [selectedOption, setSelectedOption] = useState(".");
  const [selectedCategory1, setSelectedCategory1] = useState(".");
  const [selectedCategory2, setSelectedCategory2] = useState(".");
  const [selectedCategory3, setSelectedCategory3] = useState(".");
  const [sellClassify, SetSellClassify] = useState(false);
  const [price, setPrice] = useState(0);
  const onSubmit = () => {
    console.log({
      img,
      imgSrc,
      title,
      link,
      descript,
      selectedOption,
      imgClassify,
      selectedCategory1,
      selectedCategory2,
      selectedCategory3,
      sellClassify,
      price,
    });

    CreateAPI.createNft({
      image: img,
      title: title,
      link: link,
      explanation: descript,
      tattooDesign: imgClassify,
      genre: selectedCategory1,
      theme: selectedCategory2,
      part: selectedCategory3,
      sale: sellClassify,
      price: price,
      userAccount: "user1",
    });
  };

  return (
    <Wrap>
      <Title>Create New NFT</Title>

      <UploadFileBox
        img={img}
        setImage={setImage}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
      ></UploadFileBox>

      <UploadTitle title={title} setTitle={setTitle}></UploadTitle>
      <UploadLink link={link} setLink={setLink}></UploadLink>
      <UploadDescript
        descript={descript}
        setDescript={setDescript}
      ></UploadDescript>

      <UploadImgClassify
        imgClassify={imgClassify}
        setImgClassify={SetImgClassify}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectedCategory1={selectedCategory1}
        setSelectedCategory1={setSelectedCategory1}
        selectedCategory2={selectedCategory2}
        setSelectedCategory2={setSelectedCategory2}
        selectedCategory3={selectedCategory3}
        setSelectedCategory3={setSelectedCategory3}
        sellClassify={sellClassify}
        SetSellClassify={SetSellClassify}
        price={price}
        setPrice={setPrice}
      />

      <StyledBtn onClick={onSubmit}>Create</StyledBtn>
    </Wrap>
  );
}

export default CreateTemplate;

const Wrap = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  margin-right: 270px;
`;

const StyledBtn = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #7a7a7a;
  background: #191919;

  &:hover {
    color: white;
    background: linear-gradient(45deg, #d13750, #ae2b9e);
  }
`;
