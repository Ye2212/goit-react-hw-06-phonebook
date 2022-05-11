import styled from '@emotion/styled';

export const BtnLoadMore = styled.button`
display: inline-flex;
margin-top: 30px;
margin-bottom: 30px;
margin-left: 45%;
align-items: center;
justify-content: center;
padding: 8px 16px;
border-radius: 4px;
background-color: #24292f;;
text-align: center;
display: inline-block;
color: #fff;
border: 0;
text-decoration: none;
cursor: pointer;
font-family: inherit;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 500;
min-width: 180px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
transform: scale(1);
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(0.97);
    background-color: #57606a;
  }`;