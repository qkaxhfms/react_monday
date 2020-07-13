import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`

`;

const List = styled.ul`
    display:flex;
    &:hover{
        background:#000;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;//상속을 받는다는건 link의 스타일을 받으면서 새로운 것을 받아들이고 싶을 때


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
