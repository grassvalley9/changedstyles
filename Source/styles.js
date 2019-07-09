import styled from 'styled-components';
export const Label = styled.label`
  font-size: 1.6rem;
  margin: 20px 0 10px;
`
export const Button = styled.button`
  cursor: pointer;
  background: pink;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
float:right;
 margin-top:5%;
 
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
export const SourceSectiondiv = styled.div`

     height: 200px;
  border-radius: 3px;
  border: 1px solid black;
`;
export const Input = styled.input.attrs({
 type: 'text',
 size: props => (props.small ? 5 : undefined ),
 
})`
 border-radius: 5px;
 border: 1px solid black;
 display: block;
margin-left:10%;
margin-top:5%;
 padding: 10px;
 font-size: 15px;
 color: blue;
 
 ::placeholder {
 color: blue;
 }
`;