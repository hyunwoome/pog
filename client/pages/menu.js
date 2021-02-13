import styled from 'styled-components';
import AccountMenuList from '../components/menu/AccountMenuList';
import GolfItemMenuList from '../components/menu/GolfItemMenuList';
import NoticeMenuList from '../components/menu/NoticeMenuList';
import BackButton from '../components/component/BackButton';

export default function Menu() {
	return (
		<MenuContainer>
			<BackButton />
			<AccountMenuList />
			<GolfItemMenuList />
			<NoticeMenuList />
		</MenuContainer>
	);
}

const MenuContainer = styled.div`
	height: 100%;
`;
