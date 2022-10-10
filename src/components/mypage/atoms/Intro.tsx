import React, { useState } from "react";
import styled, { css } from "styled-components";

import ArrowDownIcon from "../../../../public/assets/arrow_down.svg";

interface IProps {
  intro: string;
}

interface IntroPropsType {
  isOpen: boolean;
}

function Intro({ intro }: IProps) {
  const [isFoldOpen, setIsFoldOpen] = useState(false);

  const onToggleFold = () => setIsFoldOpen((prev) => !prev);

  return (
    <div>
      <Text isOpen={isFoldOpen}>{intro}</Text>
      <FoldBox onClick={onToggleFold}>
        <strong className="foldText">
          {isFoldOpen ? "see Less" : "see More"}
        </strong>
        <ArrowIcon isopen={isFoldOpen.toString()} />
      </FoldBox>
    </div>
  );
}

export default Intro;

const Text = styled.p<IntroPropsType>`
  color: #7a7a7a;
  font-weight: 500;
  white-space: pre-wrap;

  ${(props) =>
    !props.isOpen &&
    css`
      height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

const FoldBox = styled.div`
  cursor: pointer;

  .foldText {
    font-size: 15px;
    text-decoration: underline;
    margin-right: 8px;
  }
`;

const ArrowIcon = styled((props) => <ArrowDownIcon {...props} />)`
  ${(props) =>
    props.isopen === "true" &&
    css`
      transform: rotate(180deg);
    `}
`;
