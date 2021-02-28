import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

import Button from '../UI/Button/Button';
import Background from '../UI/Background/Background';
import Color from './Color/Color';


const PaletteWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 340px;
  min-height: 100vh;
  margin-top: 40px;
  button{
      position: absolute;
      bottom: 10%;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 10px;
  }
`

export default function ColorPicker() {
  const [show, showSetter] = useState(false);
  const [curColor, setCurColor] = useState('#FF453A');

  const colors = useSelector(state => state.palette);
  const dispatch = useDispatch();

  let currentIndex = useRef(0);

  function addColor(e) {
    dispatch({type: 'ADD', payload: '#FF453A', id: colors.length});
    currentIndex = colors.length;
    showSetter(true);
  };

  function colorSetter(color, id = currentIndex.current) {
    setCurColor(color);
    dispatch({type: 'CHANGE', payload: color, id: id})
  };

  function colorChanger(e) {
    currentIndex = e.target.dataset.index;
    showSetter(true);
  };

  function colorDelete(e, id) {
    e.stopPropagation();
    dispatch({type: 'DELETE', id: id})
  }


  return(
    <PaletteWrapper>
      {
        show ? (<Background showSetter={showSetter}>
                <div onClick={(e) => e.stopPropagation()}>
                  <ChromePicker color={curColor} onChange={updatedColor => colorSetter(updatedColor.hex)}></ChromePicker>
                </div>
                </Background>) : null
      }
      
      <div className="colors">
        {colors.map((color, i) => <Color key={i} color={color} id={i} colorChanger={colorChanger} colorDelete={colorDelete} />)}
        <Button title='Добавить цвет' addColor={addColor} />
      </div>
    </PaletteWrapper>
  )
};