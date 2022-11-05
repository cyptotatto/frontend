import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface CloseButtonPropsType {
  handleClick: () => void;
}

function CloseButton({ handleClick }: CloseButtonPropsType) {
  return (
    <Wrap>
      <div onClick={handleClick}>
        <Image
          alt="close-button"
          src="/assets/close.svg"
          width={24}
          height={24}
        />
      </div>
    </Wrap>
  );
}

export default CloseButton;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  div {
    padding: 10px;
  }
`;
