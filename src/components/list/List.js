import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import AddListItem from './AddListItem';
import ListItem from './ListItem';

// const listItems = [
//     {
//         id: 1,
//         title: 'Milk',
//         complete: false,
//     },
//     {
//         id: 2,
//         title: 'Bread',
//         complete: false,
//     },
//     {
//         id: 3,
//         title: 'Eggs',
//         complete: true,
//     },
// ];

const CompletedList = styled.ul`
    color: #dddddd;
`;

const ListContainer = styled.ul`
    color: white;
`;

export default function List() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('list');
        if (saved) {
            const initialValue = JSON.parse(saved);
            setList(initialValue || []);
        }
    }, []);

    useEffect(() => {
        if (list.length > 0) {
            localStorage.setItem('list', JSON.stringify(list));
        }
    }, [list]);

    const completeItems = list.filter((item) => item.complete);
    const incompleteItems = list.filter((item) => !item.complete);

    async function handleToggleStatus(itemId, nextSeen) {
        setList(
            list.map((item) => {
                if (item.id === itemId) {
                    return { ...item, complete: !item.complete };
                } else {
                    return item;
                }
            })
        );
        localStorage.setItem('list', JSON.stringify(list));
    }

    function addListItem(e, title) {
        e.preventDefault();
        setList([
            ...list,
            {
                id: uuidv4(),
                title,
                complete: false,
            },
        ]);
        localStorage.setItem('list', JSON.stringify(list));
    }

    function removeItem(itemId) {
        setList(list.filter((item) => item.id !== itemId));
        localStorage.setItem('list', JSON.stringify(list));
    }

    return (
        <>
            <AddListItem addListItem={addListItem} />
            <ListContainer>
                {incompleteItems.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        handleToggleStatus={handleToggleStatus}
                        removeItem={removeItem}
                    />
                ))}
            </ListContainer>
            <h3>Completed Items</h3>
            <CompletedList>
                {completeItems.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        handleToggleStatus={handleToggleStatus}
                        removeItem={removeItem}
                    />
                ))}
            </CompletedList>
        </>
    );
}
