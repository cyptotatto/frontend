import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currencyManagerAtom } from "../../../recoil/modal";
import CloseButton from "../../common/CloseButton";

const DynamicModalContainer = dynamic(
  () => import("../block/CurrencyModal/ModalContainer"),
  {
    ssr: false,
  }
);

function CurrencyModal() {
  const setCurrencyManager = useSetRecoilState(currencyManagerAtom);
  return (
    <Wrap>
      <Back
        onClick={() => {
          setCurrencyManager(false);
        }}
      ></Back>
      <Modal>
        <CloseButton handleClick={() => setCurrencyManager(false)} />
        <DynamicModalContainer />
      </Modal>
    </Wrap>
  );
}

export default CurrencyModal;

const Wrap = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 25;
  left: 0;
  right: 0;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: normal;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const Modal = styled.div`
  position: absolute;
  background-color: black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 384px;
  background-color: black;
  border-radius: 20px;
`;
