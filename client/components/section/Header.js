import styled from 'styled-components';
import Logo from '../component/Logo';
import SearchButton from '../component/SearchButton';
import { useState, useEffect } from 'react';

export default function Header() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		// 현재 스크롤 위치
		const currentScrollPos = window.pageYOffset;

		// 위치 정보에 기반한 상태
		setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

		// 새로운 스크롤 위치 상태 설정
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<>
			<HeaderContainer style={{ top: visible ? '0' : '-64px' }}>
				<Logo />
				<SearchButton />
			</HeaderContainer>
		</>
	);
}

const HeaderContainer = styled.header`
	max-width: 1024px;
	margin: auto;
	height: 64px;
	display: flex;
	align-items: center;
	padding: 0 8px;
	border-bottom: 1px solid var(--color-border);
	background-color: var(--color-background);
	position: fixed;
	left: 0;
	right: 0;
	transition: top 0.3s;
`;
