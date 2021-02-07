import styled from 'styled-components';
import AccountMenuList from '../components/menu/AccountMenuList';
import GolfItemMenuList from '../components/menu/GolfItemMenuList';
import NoticeMenuList from '../components/menu/NoticeMenuList';
import BackButton from '../components/component/BackButton';

export default function Menu() {
	return (
		<div>
			<BackButton />
			<AccountMenuList />
			<GolfItemMenuList />
			<NoticeMenuList />
		</div>
	);
}
