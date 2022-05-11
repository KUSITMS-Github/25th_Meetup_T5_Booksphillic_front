import React from 'react'
import styled from "styled-components"
import { BorderWhiteBtn } from './Buttons'
import { RowContainer } from './Container'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <HeaderContainer>
        <HeaderChildContainer>
          <Img src="../img/logo.png"></Img>
          <Menu>동네컬렉션</Menu>
          <Menu>서점프로필</Menu>
        </HeaderChildContainer>
        <HeaderChildContainer>
          <BorderWhiteBtn>
            <Link to="/apply">미스터리북 신청하기</Link></BorderWhiteBtn>
          <img src='../img/search.png'></img>
          <img src='../img/mypage.png'></img>
        </HeaderChildContainer>
      </HeaderContainer>
     
  )
}

export default Header;
const HeaderContainer=styled(RowContainer)`
  height: 64px;
  background-color: #2A3143;
  padding: 0px 44px;
  justify-content: space-between;
`
const Img=styled.img`
  
`
const Menu=styled.div`
  color: white;
  margin: 0px 20px;
`
const HeaderChildContainer=styled(RowContainer)`
  gap: 0px 40px;
`