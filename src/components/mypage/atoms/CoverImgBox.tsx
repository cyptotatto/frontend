import React from "react";
import styled from "styled-components";
import Image from "next/image";

import PencilIcon from "../../../../public/assets/pencil.svg";

interface IProps {
  imgUrl: string;
}

function CoverImgBox({ imgUrl }: IProps) {
  const handleUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    const formData = new FormData();
    formData.append("file", (target.files as FileList)[0]);
  };

  return (
    <Box>
      <Image className="coverImg" src={imgUrl} alt="" layout="fill" />
      <input
        type="file"
        id="inputFile"
        accept="image/*"
        onChange={handleUploadImg}
      />
      <label htmlFor="inputFile" className="editBtn">
        <PencilIcon />
      </label>
    </Box>
  );
}

export default CoverImgBox;

const Box = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background: #191919;
  border-radius: 30px;

  .editBtn {
    position: absolute;
    bottom: 18px;
    right: 18px;
    padding: 8px 8px 4px 8px;
    border-radius: 10px;
    background: #2b2b2b;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  > input {
    display: none;
  }
`;
