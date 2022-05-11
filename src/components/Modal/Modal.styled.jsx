import styled from "@emotion/styled";

export const Backdrop = styled.div`
position: fixed;
z-index: 1000;
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.2);
top: 10px;
left: 0;
transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 0px;

background-color: white;
min-height: 300px
max-width: 500px;
// width: 100%;

border-radius: 3px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img``;

