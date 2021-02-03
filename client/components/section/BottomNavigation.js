import styled from 'styled-components';
import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

export default function BottomNavigation() {
	return (
		<BottomNavigationContainer>
			<Link href="/">
				<IconTitleContainer>
					<HomeRoundedIcon color="action" />
					<TitleContainer>
						<a>홈</a>
					</TitleContainer>
				</IconTitleContainer>
			</Link>
			<Link href="/">
				<IconTitleContainer>
					<MenuRoundedIcon color="action" />
					<TitleContainer>
						<a>메뉴</a>
					</TitleContainer>
				</IconTitleContainer>
			</Link>
			<Link href="/mypage">
				<IconTitleContainer>
					<AccountCircleRoundedIcon color="action" />
					<TitleContainer>
						<a>마이페이지</a>
					</TitleContainer>
				</IconTitleContainer>
			</Link>
			<Link href="/calendar">
				<IconTitleContainer>
					<CalendarTodayRoundedIcon color="action" />
					<TitleContainer>
						<a>내가찾는</a>
					</TitleContainer>
				</IconTitleContainer>
			</Link>
		</BottomNavigationContainer>
	);
}

const BottomNavigationContainer = styled.div`
	max-width: 1024px;
	height: 72px;
	border-top: 1px solid var(--color-border);
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: space-around;
`;

const IconTitleContainer = styled.div`
	display: flex;
	width: 72px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

const TitleContainer = styled.div`
	margin-top: 4px;
	font-size: var(--font-caption);
	font-weight: 300;
`;
