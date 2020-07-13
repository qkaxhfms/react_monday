import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    z-index:10;
    display:flex;
    color:#f2f2f2;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    background:rgba(20,20,20,0.8);
    box-shadow:0 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display:flex;
    /* &:hover{
        background:#000;
    } */
`;

const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
`;

const SLink = styled(Link)`
    display:flex;
    height:50px;
    align-items:center;
    justify-content:center;
`;//상속을 받는다는건 link의 스타일을 받으면서 새로운 것을 받아들이고 싶을 때


export default () => {
    return(
        <Header>
            <List>
                <Item><SLink to="/">Home</SLink></Item>
                <Item><SLink to="/search">Search</SLink></Item>
            </List>
        </Header>
    )
}
