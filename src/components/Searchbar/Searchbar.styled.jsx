import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';

export const Header = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 99;
display: flex;
justify-content: center;
align-items: center;
min-height: 90px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: #fff;
background-color: #24292f;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3),
  0px 4px 5px 0px rgba(0, 0, 0, 0.18), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 24px;
}`;
export const Form = styled.form`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;`;

export const Button = styled.button`
display: inline-block;
width: 35px;
height: 35px;
border: 0;
// background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
// background-size: 40%;
// background-repeat: no-repeat;
// background-position: center;
opacity: 0.6;
// background-color: #c5c5c8;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
&:hover {
    opacity: 1;
  }`;
export const SearchSvg = styled(GoSearch)`
width: 22px;
  height: 22px;
  fill: #24292f`;

// export const Span = styled.span`
// position: absolute;
// width: 1px;
// height: 1px;
// padding: 0;
// overflow: hidden;
// clip: rect(0, 0, 0, 0);
// white-space: nowrap;
// clip-path: inset(50%);
// border: 0;`;

export const Input = styled.input`
width: 100%;
height: 35px;
padding: 0 10px 0 10px;
padding: 0 10px 0 10px;
font: inherit;
font-size: 20px;
border: none;
outline: none;
border-bottom-right-radius: 4px;
border-top-right-radius: 4px;
padding-left: 4px;
padding-right: 4px;
&::placeholder {
    font: inherit;
    font-size: 18px;
  }
  &:focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  };`;
