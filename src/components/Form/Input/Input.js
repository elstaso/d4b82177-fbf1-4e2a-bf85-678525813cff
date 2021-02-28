import styled from 'styled-components';

const Label = styled.label`
  font-family: 'Gotham Pro';
  color: rgba(235, 235, 245, 0.6);;
  font-size: 13px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 30px;
`

const InputField = styled.input`
  height: 38px;
  background: rgba(118, 118, 128, 0.24);
  border-radius: 10px;
  border-color: transparent;
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: rgba(235, 235, 245, 0.6);
  padding: 10px;
  &:focus {
    outline: none;
  }
`

export default function Input({title, placeholder, id, value, setter}) {
  return(
    <>
      <Label htmlFor={id}>{title}</Label>
      <InputField type='text' id={id} value={value} placeholder={placeholder} onChange={e => setter(e.target.value)} />
    </>
  )
};