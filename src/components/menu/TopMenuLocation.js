import { useState } from 'react';

import { MdLocationOn } from 'react-icons/md';

import LocationMenu from './LocationMenu';

import { MenuItemContainer } from './styles';

export default function TopMenuLocation() {
    const [showInfo1, setShowInfo1] = useState(false);

    return (
        <MenuItemContainer>
            <MdLocationOn />
            {!showInfo1 ? (
                <div
                    key='1'
                    onClick={() => {
                        setShowInfo1(true);
                    }}
                >
                    <p>Kroger</p>
                    <p>123 Main St.</p>
                </div>
            ) : (
                <div key='2'>
                    <p>Kroger</p>
                    <p>123 Main St.</p>
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
