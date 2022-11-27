import React, { useState } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../public/assets/arrow_down.svg";

interface IProps {
  contractAddress: string;
}

function Details({ contractAddress }: IProps) {
  const [selectedMenu, setSelectedMenu] = useState("Details");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box onClick={() => setIsMenuOpen((prev) => !prev)}>
      <StyledBox>
        <Select>
          <Text>{isMenuOpen ? "Details" : selectedMenu}</Text>
          <ArrowIcon isopen={isMenuOpen.toString()} />
        </Select>
      </StyledBox>
      {isMenuOpen && (
        <OptBox>
          <Opt>{contractAddress}</Opt>
        </OptBox>
      )}
    </Box>
  );
}

export default Details;

const Box = styled.div`
  width: 640px;
  outline: none;
  background-color: #191919;
  font-size: 18px;
  cursor: pointer;
  height: 63px;
  border-radius: 10px;
  margin-top: 32px;
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 63px;
`;

const Select = styled.div`
  display: flex;
  background-color: #191919;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 8px;
`;

const ArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isopen === "true" &&
    css`
      transform: rotate(180deg);
    `}
`;

const Text = styled.span``;

const OptBox = styled.div``;

const Opt = styled.div`
  position: relative;
  top: -10px;
  z-index: 5;
  width: 640px;
  outline: none;
  background-color: #191919;
  font-size: 12px;
  cursor: pointer;
  height: 128px;
  display: flex;
  background-color: #191919;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;

  &:hover {
    background: #2b2b2b;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;
