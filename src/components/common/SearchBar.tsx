import Image from "next/image";
import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <Wrap>
      <div className="search-icon">
        <Image src="/assets/search.svg" alt="logo" width="30px" height="30px" />
      </div>
      <input placeholder="Search items, creators"></input>
      <div className="search-button">search</div>
    </Wrap>
  );
}

export default SearchBar;

const Wrap = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  width: 50%;
  height: 40px;
  margin-top: 20px;
  .search-icon {
    line-height: 30px;
    padding-top: 5px;
    padding-left: 10px;
  }
  input {
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    padding-left: 8px;
    width: 85%;
    :focus {
      outline: none;
    }
  }
  .search-button {
    display: none;
  }
`;
