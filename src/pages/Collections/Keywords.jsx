import React, { useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import { ColContainer } from '../../components/Container'
import { keywordList } from '../../components/keywordList'
const Keywords =()=> {
  return (
    <ScrollContainer>
        {
            keywordList.map((word)=>(
                 (
                     word.includes("송파")
                     ?<KeyWord className='week'>{word}</KeyWord>
                     :<KeyWord>{word}</KeyWord>
                 )
            ))
        }
    </ScrollContainer>
  )
}

export default Keywords
const ScrollContainer=styled(ColContainer)`
    margin: 80px 0 150px 0;
    height: 286px;
    width: 100%;
    font-weight: 700;
font-size: 36px;
line-height: 52px;
display: flex;
align-items: center;
color: #BDBDBD;
overflow: scroll;
&::-webkit-scrollbar {
    display: none;
}

`
const KeyWord=styled.div`
padding: 30px 0;
text-align: center;
width: 100%;
border-bottom:  1px solid #616161;
&.week{
    color:black;
}
`