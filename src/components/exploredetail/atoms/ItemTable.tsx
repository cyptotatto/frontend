import React from "react";
import styled from "styled-components";

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
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </StyledHead>
      <StyledBody>
        {data.map(({ event, price, from, to, time }, index) => (
          <tr key={index}>
            <td>{event}</td>
            <td>{price}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{time}</td>
          </tr>
        ))}
      </StyledBody>
    </StyledTable>
  );
}

export default ItemTable;

const StyledTable = styled.table`
  width: 608px;
  height: 320px;
  background: #0a0a0a;
  border-radius: 10px;
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
`;
