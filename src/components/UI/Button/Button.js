import styled from 'styled-components';

const ButtonWrapper = styled.button`
      font-family: Gotham Pro;
      width: 340px;
      font-style: normal;
      font-weight: normal;
      height: 50px;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.408px;
      color: #FFFFFF; 
      background: #007AFF;
      border-radius: 8px;
      border-color: transparent;
      margin: 30px 0;
      transition: .3s;
      &:focus {
        outline: none;
      }
      &:hover {
        background: #2a8bf5;
      }
`

export default function Button({title, addColor}) {
  return <ButtonWrapper onClick={addColor}>{title}</ButtonWrapper>
}