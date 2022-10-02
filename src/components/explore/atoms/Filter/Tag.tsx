import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  isActive: boolean;
  children: string;
  onSelectTag: (name: string) => void;
}

type TagPropsType = {
  isActive: boolean;
};

function Tag({ isActive, children, onSelectTag }: IProps) {
  return (
    <StyledTag isActive={isActive} onClick={() => onSelectTag(children)}>
      {children}
    </StyledTag>
  );
}

export default Tag;

const StyledTag = styled.li<TagPropsType>`
  background: ${(props) => (props.isActive ? "#CF3752" : "#151515")};
  font-size: 16px;
  padding: 8px 14px;
  border-radius: 30px;
  cursor: pointer;
`;
