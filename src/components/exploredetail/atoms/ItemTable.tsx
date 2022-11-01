import React from "react";
import styled from "styled-components";
import Image from "next/image";
import GrowthIcon from "../../../../public/assets/growth.png";

function ItemTable() {
  const columns = ["Event", "Price", "From", "To", "Time"];
  const data = [
    {
      event: "Mint",
      price: "3.33ETH",
      from: "0xassfa",
      to: "-",
      time: "7 days ago",
    },
    {
      event: "Mint",
      price: "3.33ETH",
      from: "0xassfa",
      to: "-",
      time: "7 days ago",
    },
    {
      event: "Mint",
      price: "3.33ETH",
      from: "0xassfa",
      to: "-",
      time: "7 days ago",
    },
  ];

  return (
    <StyledTable>
      <StyledHead>
        <StyledTitleTr>
          <Image src={GrowthIcon} /> Item Activity
        </StyledTitleTr>
        <StyledHeadTr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </StyledHeadTr>
      </StyledHead>
      <StyledBody>
        {data.map(({ event, price, from, to, time }) => (
          <tr key={event}>
            <StyledTd>{event}</StyledTd>
            <StyledTd>{price}</StyledTd>
            <StyledTd>{from}</StyledTd>
            <StyledTd>{to}</StyledTd>
            <StyledTd>{time}</StyledTd>
          </tr>
        ))}
      </StyledBody>
    </StyledTable>
  );
}

export default ItemTable;

const StyledTable = styled.table`
  width: 608px;
  background: #0a0a0a;
  border: solid 22px #0a0a0a;
  border-radius: 10px;
  border-collapse: collapse;
`;

const StyledTitleTr = styled.tr`
  display: flex;
  height: 64px;
  align-items: center;
`;
const StyledHeadTr = styled.tr`
  height: 40px;
`;

const StyledHead = styled.thead`
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
  th {
    text-align: start;
    border-bottom: 1px solid #191919;
  }
`;

const StyledBody = styled.tbody`
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ebebeb;
  height: 40px;
`;

const StyledTd = styled.td`
  height: 40px;
  border-bottom: 1px solid #191919;
`;
