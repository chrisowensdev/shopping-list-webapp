import { useState } from 'react';

export default function AddListItem(props) {
    const { addListItem } = props;
    const [newItem, setNewItem] = useState('');

    return (
        <form onSubmit={(e) => addListItem(e, newItem)}>
            <input
                type='text'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button>+</button>
        </form>
    );
}
