import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import UploadFileBox from "../blocks/UploadFileBox";
import UploadTitle from "../blocks/UploadTitle";
import UploadLink from "../blocks/UploadLink";
import UploadDescript from "../blocks/UploadDescript";
import CustomButton from "../../../common/CustomButton";

//create
function CreateTemplate() {
  const [img, setImage] = useState<any>();
  const [imgSrc, setImgSrc] = useState<any>("");
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [descript, setDescript] = useState<string>("");
  const options = [
    { value: "1", name: "dummy1" },
    { value: "2", name: "dummy2" },
  ];
  const onSubmit = () => {};

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

      <div>
        <h1>카테고리</h1>
        <StyledSelect>
          <option selected disabled hidden>
            장르별
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      </div>

      <div>
        <StyledSelect>
          <option selected disabled hidden>
            장르별
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      </div>

      <div>
        <StyledSelect>
          <option selected disabled hidden>
            장르별
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      </div>

      <div>
        <StyledBtn onClick={onSubmit}>Create</StyledBtn>
      </div>
    </Wrap>
  );
}

export default CreateTemplate;

const Wrap = styled.div`
  //padding-top: 80px;

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

const StyledSelect = styled.select`
  background-color: #191919;
  color: #7a7a7a;
  width: 640px;
  height: 48px;
  border: 2px solid #191919;
  border-radius: 10px;
  margin-bottom: 24px;
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
