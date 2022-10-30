import { useState } from 'react';
import styled from 'styled-components';
import { MdAddCircleOutline } from 'react-icons/md';

const AddItemForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddItemInput = styled.input`
    background-color: #0b344a;
    border: none;
    color: #fff;
    width: 80%;
    padding: 10px;
    font-size: 15px;
    margin: 10px;
`;

const AddItemButton = styled.button`
    border: none;
    background: none;
    color: white;
    font-size: 30px;
    display: flex;
`;

export default function AddListItem(props) {
    const { addListItem } = props;
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e, newItem) => {
        e.preventDefault();
        addListItem(newItem);
        setNewItem('');
    };

    return (
        <AddItemForm onSubmit={(e) => handleSubmit(e, newItem)}>
            <AddItemInput
                type='text'
                value={newItem}
                placeholder='Add Item'
                onChange={(e) => setNewItem(e.target.value)}
            />
            <AddItemButton>
                <MdAddCircleOutline />
            </AddItemButton>
        </AddItemForm>
    );
}
