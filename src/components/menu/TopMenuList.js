import { MdOutlineMenu } from 'react-icons/md';

import { MenuItemContainer } from './styles';

export default function TopMenuList() {
    return (
        <MenuItemContainer>
            <MdOutlineMenu />
            <p>List: Kroger</p>
        </MenuItemContainer>
    );
}
