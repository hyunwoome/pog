import styled from 'styled-components';
import Link from 'next/link';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import RateReviewRoundedIcon from '@material-ui/icons/RateReviewRounded';

export default function MenuList() {
	const MenuListItem = [
		{
			id: 1,
			title: '공지사항',
			href: '/notice',
			icon: 'notice',
		},
		{
			id: 2,
			title: '로그인',
			href: '/login',
			icon: 'login',
		},
		{
			id: 3,
			title: '예약확인',
			href: '/reservation',
			icon: 'reservation',
		},
		{
			id: 4,
			title: '견적문의',
			href: '/contact',
			icon: 'contact',
		},
		{
			id: 5,
			title: '내가찾는 해외골프',
			href: '/calendar',
			icon: 'calendar',
		},
		{
			id: 6,
			title: '후기게시판',
			href: '/review',
			icon: 'review',
		},
	];

	function getIcon(icon) {
		switch (icon) {
			case 'notice':
				return <NotificationsNoneRoundedIcon color="action" />;
			case 'login':
				return <PermIdentityRoundedIcon color="action" />;
			case 'reservation':
				return <AccessTimeRoundedIcon color="action" />;
			case 'contact':
				return <ContactPhoneRoundedIcon color="action" />;
			case 'calendar':
				return <EventAvailableRoundedIcon color="action" />;
			case 'review':
				return <RateReviewRoundedIcon color="action" />;
		}
	}

	const MenuListMap = MenuListItem.map((item) => (
		<MenuItemList key={item.id}>
			<Link href={item.href}>
				<a style={{ display: 'flex', padding: '12px 0 4px 16px' }}>
					<IconWrapper>{getIcon(item.icon)}</IconWrapper>
					<TitleWrapper>{item.title}</TitleWrapper>
				</a>
			</Link>
		</MenuItemList>
	));

	return (
		<MenuListContainer>
			<MenuListUnorderedList>{MenuListMap}</MenuListUnorderedList>
		</MenuListContainer>
	);
}

const MenuListContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
	position: absolute;
	bottom: 71px;
`;

const MenuListUnorderedList = styled.ul`
	padding: 0;
`;

const MenuItemList = styled.li`
	list-style: none;
	&:hover {
		background-color: var(--color-border);
	}
`;

const IconWrapper = styled.div``;

const TitleWrapper = styled.div`
	font-size: 0.875rem;
	margin-left: 16px;
`;
