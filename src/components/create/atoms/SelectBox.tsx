import React, { useState } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../public/assets/arrow_down.svg";

interface IProps {
  options: option[];
}

type option = {
  value: string;
  name: string;
};

function SelectBox({ options }: IProps) {
  const [selectedMenu, setSelectedMenu] = useState(options[0].value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box onClick={() => setIsMenuOpen((prev) => !prev)}>
      <Select>
        <Text>{isMenuOpen ? options[0].value : selectedMenu}</Text>
        <ArrowIcon isopen={isMenuOpen.toString()} />
      </Select>
      {isMenuOpen && (
        <OptBox>
          {options.map((option) => (
            <Opt
              key={option.value}
              onClick={() => setSelectedMenu(option.name)}
            >
              {option.name}
            </Opt>
          ))}
        </OptBox>
      )}
    </Box>
  );
}

export default SelectBox;

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
