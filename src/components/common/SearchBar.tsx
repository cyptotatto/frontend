import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SearchBar() {
  const [reponsive, setResponsive] = useState("ok");
  useEffect(() => {
    if (window.screen.width > 480) {
      setResponsive("ok");
    } else {
      setResponsive("");
    }
    window.addEventListener("resize", (event) => {
      if (window.screen.width > 480) {
        setResponsive("ok");
      } else {
        setResponsive("");
      }
    });
  }, []);
  return (
    <>
      {reponsive ? (
        <Wrap>
          <div className="search-icon">
            <Image
              src="/assets/search.svg"
              alt="logo"
              width="30px"
              height="30px"
            />
          </div>
          <input placeholder="Search items, creators"></input>
          <div className="search-button">search</div>
        </Wrap>
      ) : (
        <NarrowSearchBar>
          <Image
            src="/assets/search.svg"
            alt="logo"
            width="30px"
            height="30px"
          />
        </NarrowSearchBar>
      )}
    </>
  );
}

export default SearchBar;

const Wrap = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  width: 50%;
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

const NarrowSearchBar = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 5px;
`;
