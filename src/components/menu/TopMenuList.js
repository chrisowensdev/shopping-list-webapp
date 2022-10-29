import { useState } from 'react';

import { MdOutlineMenu } from 'react-icons/md';

import LocationMenu from './LocationMenu';

import { MenuItemContainer } from './styles';

export default function TopMenuList() {
    const [showInfo1, setShowInfo1] = useState(false);
    return (
        <MenuItemContainer>
            <MdOutlineMenu />
            {!showInfo1 ? (
                <div
                    key='1'
                    onClick={() => {
                        setShowInfo1(true);
                    }}
                >
                    <p>List: Kroger</p>
                </div>
            ) : (
                <div key='2'>
                    <p>List: Kroger</p>
                </div>
            )}

<LocationMenu
                show={showInfo1}
                onClickOutside={() => {
                    setShowInfo1(false);
                }}
                message='click outside to close this'
            />
        </MenuItemContainer>
    );
}
