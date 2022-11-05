import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currencyManagerAtom } from "../../../recoil/modal";
import CloseButton from "../../common/CloseButton";
import ModalContainer from "../block/CurrencyModal/ModalContainer";

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
        <ModalContainer />
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
  height: 472px;
`;
