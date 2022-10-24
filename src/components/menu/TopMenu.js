import TopMenuList from './TopMenuList';
import TopMenuLocation from './TopMenuLocation';

import { TopMenuContainer } from './styles';

export default function TopMenu() {
    return (
        <TopMenuContainer>
            <TopMenuList />
            <TopMenuLocation />
        </TopMenuContainer>
    );
}
