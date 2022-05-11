import styled from "@emotion/styled";

export const Name = styled.span`
font-weight: 600;
margin-right: 10px; 
`
export const Number = styled.span`
font-weight: 700;
`
export const ContactItem = styled.p`
margin-right: 15px;
`
export const DeleteBtn = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;

width: 30px;
border-radius: 4px;
height: 30px;
padding: 10px;

border: none;
background-color: #4b4b4b;
opacity: 0.4;
color: white;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

cursor: pointer;
&:hover,
&:focus {
  opacity: 1;
}
`