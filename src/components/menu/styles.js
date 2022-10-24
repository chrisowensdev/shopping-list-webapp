import styled from 'styled-components';

export const TopMenuContainer = styled.section`
    background-color: #0b344a;
    color: #fff;
    font-size: 25px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        font-size: 10px;
        margin: 0 10px;
    }
`;

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48%;
    position: relative;

    div {
        display: block;
    }
`;
