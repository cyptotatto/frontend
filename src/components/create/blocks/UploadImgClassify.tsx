import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";
import SelectImg from "../atoms/SelectImg";
import UploadPrice from "./UploadPrice";
import UploadSell from "./UploadSell";

interface IProps {
  imgClassify: boolean;
  setImgClassify: Dispatch<SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  selectedCategory1: string;
  setSelectedCategory1: Dispatch<SetStateAction<string>>;
  selectedCategory2: string;
  setSelectedCategory2: Dispatch<SetStateAction<string>>;
  selectedCategory3: string;
  setSelectedCategory3: Dispatch<SetStateAction<string>>;
  sellClassify: boolean;
  SetSellClassify: Dispatch<SetStateAction<boolean>>;

  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}
function UploadImgClassify({
  imgClassify,
  setImgClassify,
  selectedOption,
  setSelectedOption,
  selectedCategory1,
  setSelectedCategory1,
  selectedCategory2,
  setSelectedCategory2,
  selectedCategory3,
  setSelectedCategory3,
  sellClassify,
  SetSellClassify,
  price,
  setPrice,
}: IProps) {
  const [selectedMenu, setSelectedMenu] = useState(".");

  const options = [
    { value: ".", name: "도안" },
    { value: ".1", name: "타투 사진" },
  ];
  const options1 = [
    { value: "장르별", name: "장르1" },
    { value: "장르별2", name: "장르2" },
  ];
  const options2 = [
    { value: "주제별", name: "이레즈미" },
    { value: "주제별2", name: "블랙워크" },
    { value: "주제별3", name: "올드스쿨" },
    { value: "주제별4", name: "뉴스쿨" },
    { value: "주제별5", name: "장르별" },
  ];

  const options3 = [
    { value: "부위별", name: "팔" },
    { value: "주제별2", name: "다리" },
    { value: "주제별3", name: "허리" },
    { value: "주제별4", name: "쇄골" },
    { value: "주제별5", name: "등" },
  ];

  const optionImg = [
    { value: ".", name: "판매 등록 하지 않음" },
    { value: ".1", name: "판매 등록" },
  ];
  useEffect(() => {
    console.log(imgClassify);
  }, [imgClassify]);
  useEffect(() => {
    console.log(sellClassify);
  }, [sellClassify]);
  useEffect(() => {
    console.log(selectedCategory1);
  }, [selectedCategory1]);
  return (
    <>
      <div>
        <StyledTitle>사진 분류</StyledTitle>
        <SelectImg
          options={options}
          openValue={imgClassify}
          setOpenValue={setImgClassify}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div>
        <StyledTitle>카테고리</StyledTitle>
        <SelectBox
          options={options1}
          selectedMenu={selectedCategory1}
          setSelectedMenu={setSelectedCategory1}
        />
        <SelectBox
          options={options2}
          selectedMenu={selectedCategory2}
          setSelectedMenu={setSelectedCategory2}
        />

        {imgClassify ? (
          <SelectBox
            options={options3}
            selectedMenu={selectedCategory3}
            setSelectedMenu={setSelectedCategory3}
          />
        ) : (
          <></>
        )}

        <>
          <UploadSell
            options={optionImg}
            openValue={sellClassify}
            setOpenValue={SetSellClassify}
          />
          {sellClassify ? (
            <UploadPrice price={price} setPrice={setPrice} />
          ) : (
            <></>
          )}
        </>
      </div>
    </>
  );
}
const StyledTitle = styled.h1`
  font-size: 18px;
`;
export default UploadImgClassify;
