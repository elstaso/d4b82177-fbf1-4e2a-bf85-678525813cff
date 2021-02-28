import { useEffect, useState } from "react";
import styled from 'styled-components';
import Upload from './Upload/Upload';

const UploadTitle = styled.label`
  font-family: 'Gotham Pro';
  color: rgba(235, 235, 245, 0.6);;
  font-size: 13px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 30px;
`

export default function FileUpload({image, setImage}) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(Boolean(image));
  }, [image]);

  return(
    <>
      <UploadTitle htmlFor="upload">Фото</UploadTitle>
      {show ? <img src={URL.createObjectURL(image)} width='122' /> : <Upload setImage={setImage} />}
    </>
  )
};