import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #767680;
  border: 43px solid #767680;
  border-radius: 28px;
  .container {
    width: 100%;
    height: 100%;
    border-radius: calc(43px - 28px);
    background-color: #000000;
    padding: 40px 50px;
  }
`
export default function Layout({ children }) {
  return(
    <Wrapper>
      <div className='container'>
        <GlobalStyles />
        <Header />
        {children}
      </div>
  </Wrapper>
  )
};