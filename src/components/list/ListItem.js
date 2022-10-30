import styled from 'styled-components';

const Item = styled.li`
    border: 1px solid black;
    padding: 7px;
    margin: 10px;
    list-style-type: none;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    p {
        width: 90%;
        text-align: left;
        padding-left: 5px;
    }

    button {
        background: none;
        border: none;
    }
`;

export default function ListItem(props) {
    const { item, handleToggleStatus, removeItem } = props;

    const backgroundColor = item.complete ? 'grey' : '#115477';

    return (
        <Item style={{ backgroundColor: backgroundColor }}>
            <p onClick={(e) => handleToggleStatus(item.id)}>{item.title}</p>
            <button onClick={(e) => removeItem(item.id)}>X</button>
        </Item>
    );
}
