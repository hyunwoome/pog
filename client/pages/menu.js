import styled from 'styled-components';
import AccountMenuList from '../components/menu/AccountMenuList';
import GolfItemMenuList from '../components/menu/GolfItemMenuList';
import NoticeMenuList from '../components/menu/NoticeMenuList';
import BackButton from '../components/component/BackButton';
import Router from 'next/router';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

export default function Menu() {
	const homeButton = () => {
		Router.push('/');
	};
	return (
		<div>
			<BackButton
				title="전체메뉴"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<MenuContainer>
				<AccountMenuList />
				<GolfItemMenuList />
				<NoticeMenuList />
			</MenuContainer>
		</div>
	);
}

const MenuContainer = styled.div`
	height: 100%;
`;
