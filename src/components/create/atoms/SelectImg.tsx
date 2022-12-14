import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../public/assets/arrow_down.svg";

interface IProps {
  options: option[];
  openValue: boolean;
  setOpenValue: Dispatch<SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

type option = {
  value: string;
  name: string;
};

function SelectImg({
  options,
  openValue,
  setOpenValue,
  selectedOption,
  setSelectedOption,
}: IProps) {
  const [selectedMenu, setSelectedMenu] = useState(options[0].value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box onClick={() => setIsMenuOpen((prev) => !prev)}>
      <Select>
        <Text>{isMenuOpen ? options[0].value : selectedOption}</Text>
        <ArrowIcon isopen={isMenuOpen.toString()} />
      </Select>
      {isMenuOpen && (
        <OptBox>
          <Opt
            key={options[0].value}
            onClick={() => {
              setSelectedOption(options[0].name);
              setOpenValue(false);
              console.log(open);
            }}
          >
            {options[0].name}
          </Opt>
          <Opt
            key={options[1].value}
            onClick={() => {
              setSelectedOption(options[1].name);
              setOpenValue(true);
              console.log(open);
            }}
          >
            {options[1].name}
          </Opt>
        </OptBox>
      )}
    </Box>
  );
}

export default SelectImg;

const Box = styled.div`
  width: 640px;
  outline: none;
  background-color: #191919;
  font-size: 12px;
  cursor: pointer;
  height: 48px;
  border-radius: 10px;
  margin-bottom: 24px;
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
  z-index: 5;
  width: 640px;
  outline: none;
  background-color: #191919;
  font-size: 12px;
  cursor: pointer;
  height: 48px;
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
