import styled from 'styled-components';
import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { useState, useEffect } from 'react';

export default function BottomNavigation() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		// 현재 스크롤 위치
		const currentScrollPos = window.pageYOffset;

		// 위치 정보에 기반한 상태
		setVisible(prevScrollPos < currentScrollPos || currentScrollPos < 10);

		// 새로운 스크롤 위치 상태 설정
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<BottomNavigationContainer style={{ bottom: visible ? '0' : '-72px' }}>
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
	transition: bottom 0.3s;
	background-color: var(--color-background);
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
