import styled from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

const BottomMenuContainer = styled.section`
    background-color: #0b344a;
    color: #fff;
    font-size: 30px;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-around;
`;

export default function BottomMenu() {
    return (
        <BottomMenuContainer>
            <BsListCheck />
            <MdAccountCircle />
        </BottomMenuContainer>
    );
}
