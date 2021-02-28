import { useState } from 'react';
import styled from 'styled-components';

const ColorWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 5px;
  margin-right: 25px;
  margin-bottom: 25px;
  svg {
    position: absolute;
    top: -5px;
    right: -5px;
  }
`

const Color = ({color, id, colorChanger, colorDelete}) => {
  const [show, showSetter] = useState(false);

  return(
    <ColorWrapper style={{backgroundColor: color}} data-index={id} onClick={(e) => colorChanger(e)} onMouseOver={() => showSetter(show => !show)} onMouseLeave={() => showSetter(show => false)}>
      <svg style={show ? {display: 'block'} : {display: 'none'}} onClick={(e) => colorDelete(e, id)} onMouseOver={() => showSetter(show => !show)} onMouseLeave={() => showSetter(false)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 1.7C4.74446 1.7 1.7 4.74446 1.7 8.5C1.7 12.2555 4.74446 15.3 8.5 15.3C12.2555 15.3 15.3 12.2555 15.3 8.5C15.3 4.74446 12.2555 1.7 8.5 1.7ZM0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5ZM4.92396 4.92396C5.2559 4.59201 5.7941 4.59201 6.12604 4.92396L8.5 7.29792L10.874 4.92396C11.2059 4.59201 11.7441 4.59201 12.076 4.92396C12.408 5.2559 12.408 5.7941 12.076 6.12604L9.70208 8.5L12.076 10.874C12.408 11.2059 12.408 11.7441 12.076 12.076C11.7441 12.408 11.2059 12.408 10.874 12.076L8.5 9.70208L6.12604 12.076C5.7941 12.408 5.2559 12.408 4.92396 12.076C4.59201 11.7441 4.59201 11.2059 4.92396 10.874L7.29792 8.5L4.92396 6.12604C4.59201 5.7941 4.59201 5.2559 4.92396 4.92396Z" fill="white"/>
      </svg>
    </ColorWrapper>)};

export default Color;