import React from "react";
import styled from "styled-components";

interface CurrencyTextPropsType {
  mainText: string;
  subText: string;
  marginTop?: string;
  marginBottom?: string;
}

function CurrencyText({
  mainText,
  subText,
  marginTop,
  marginBottom,
}: CurrencyTextPropsType) {
  console.log(marginTop);
  return (
    <Wrap>
      <div className="main-text" style={{ marginTop: `${marginTop}` }}>
        {mainText}
      </div>
      <div className="sub-text" style={{ marginBottom: `${marginBottom}` }}>
        {subText}
      </div>
    </Wrap>
  );
}

export default CurrencyText;

const Wrap = styled.div`
  .main-text {
    margin: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  .sub-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #7a7a7a;
  }
`;
