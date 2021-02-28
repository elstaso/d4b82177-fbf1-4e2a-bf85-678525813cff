import styled from 'styled-components';

const BgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
`

export default function Background({children, showSetter}) {
  const clickChecker = e => {
    e.stopPropagation();
    if(e.target.dataset.type = 'bg') {
      showSetter(show => !show);
    }
  }
  return(
    <BgWrapper data-type='bg' onClick={clickChecker}>
      {children}
    </BgWrapper>
  )
}