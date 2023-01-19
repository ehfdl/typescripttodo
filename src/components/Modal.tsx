import React from "react";
import styled from "styled-components";

interface ModalType {
  onClickModal: () => void;
}

const Modal = (props: ModalType) => {
  const { onClickModal } = props;
  return (
    <ModalWrap>
      <ModalBack onClick={onClickModal} />
      <ModalContainer>
        <input defaultValue="최영진" />
        <input />
        <button>수정완료</button>
        <button onClick={onClickModal}>닫기</button>
      </ModalContainer>
    </ModalWrap>
  );
};

export default Modal;

const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  align-items: center;
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
