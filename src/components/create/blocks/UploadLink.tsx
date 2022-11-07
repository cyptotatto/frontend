import React from "react";
import styled, { css } from "styled-components";
function UploadLink({ link, setLink }: any) {
  const onChangeInput = (e: any) => {
    setLink(e.target.value);
  };

  return (
    <div>
      <StyledTitle>외부 링크 입력</StyledTitle>
      <StyledDescript>
        cryptattoo에서는 작업물에 대한 상세페이지 URL를 첨부함으로써 사용자로
        하여금 확인할 수 있도록 합니다.
      </StyledDescript>
      <StyledInput
        placeholder="http://yoursite/item/123"
        value={link}
        onChange={onChangeInput}
      ></StyledInput>
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;
const StyledDescript = styled.h1`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #7a7a7a;
`;

const StyledInput = styled.input`
  width: 640px;
  height: 48px;
  color: white;
  background: #191919;
  border-radius: 10px;
  border: 2px solid #191919;
`;
export default UploadLink;
