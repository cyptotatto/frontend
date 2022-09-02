import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
declare var window: any;

const Home: NextPage = () => {
  const [account, setAccount] = useState<string>("");
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, [account]);

  return (
    <>
      <div>크립토 타투 메인페이지입니다{account}</div>
    </>
  );
};

export default Home;
