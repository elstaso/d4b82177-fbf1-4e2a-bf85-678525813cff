import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const HeadWrapper = styled.header`
  display: flex;
  nav {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
    a{ 
      font-family: 'Gotham Pro';
      font-size: 17px;
      color: white;
      text-decoration: none;
      &.active {
        border-bottom: 1px solid white;
      }
    }
  }
`

export default function Header() {
  return (
    <HeadWrapper>
      <nav><NavLink to='/' exact activeClassName="active">Форма</NavLink></nav>
      <nav><NavLink to='/palette' exact activeClassName="active">Палитра</NavLink></nav>
    </HeadWrapper>
  )
}