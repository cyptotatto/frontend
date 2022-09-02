import type { NextPage } from "next";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum: any;
  }
}

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
