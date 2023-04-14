import styled from "styled-components";

type ModalParams = {
  children: JSX.Element;
  show: boolean;
  setShow: (value: boolean) => void;
};

export const Modal = ({
  show,
  setShow,
  children,
}: ModalParams): JSX.Element => {
  return (
    <Model show={show} onClick={() => setShow(false)}>
      <Container>{children}</Container>
    </Model>
  );
};

const Model = styled.div<{ show: boolean }>`
  z-index: 1000;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: fixed;
  background: #000;
  width: fit-content;
  height: auto;

  border-radius: 10px;
  padding: 0.75rem;
`;
