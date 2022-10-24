import { useEffect, useRef } from 'react';

import styled from 'styled-components';

const LocationMenuContainer = styled.div`
    position: absolute;
    top: 35px;
    left: -255px;
    width: 500px;
    max-width: 500px;
    background-color: red;
`;

export default function LocationMenu(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show) return null;

    return (
        <LocationMenuContainer ref={ref}>{props.message}</LocationMenuContainer>
    );
}
