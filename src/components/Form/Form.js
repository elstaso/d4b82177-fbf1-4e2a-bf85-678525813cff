import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import styled from 'styled-components';
import FileUpload from './FileUpload/FileUpload';
import Input from './Input/Input';
import Response from './Response/Response';
import Button from '../UI/Button/Button';

const FormWrapper = styled.main`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    width: 340px;
    button{
      font-family: Gotham Pro;
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
    }
  }
`

export default function Form() {
  const [name, setName] = useState('');
  const [surename, setSurename] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [image, setImage] = useState(null);
  const [res, resSetter] = useState('');

  async function sendData(name, surename, patronymic, image, e) {
    e.preventDefault();
    const formsData = [name, surename, patronymic];
    if (formsData.every(str => !str || str.split('').every(char => char === ' '))) return;

    let serilized = new FormData();
    serilized.append('action', 'send_data');
    serilized.append('id', 1);
    serilized.append('image', image);
    serilized.append('contact', formsData)
    await axios.post('https://test-job.pixli.app/send.php', serilized).then(res => resSetter(JSON.stringify(res)));
  }

  return(
    <FormWrapper>
      <form onSubmit={(e) => sendData(name, surename, patronymic, image, e)}>
        <Input title='Имя' placeholder='Лев' id='name' value={name} setter={setName} />
        <Input title='Фамилия' placeholder='Левченко' id='surename' value={surename} setter={setSurename} />
        <Input title='Отчество' placeholder='Валерьянович' id='patronymic' value={patronymic} setter={setPatronymic} />
        <FileUpload image={image} setImage={setImage} />
        <Button title='Сохранить' />
      </form>
      <Response response={res} />
    </FormWrapper>
  )
}