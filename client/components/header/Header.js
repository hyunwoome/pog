import styled from 'styled-components';
import Menu from './Menu';
import Logo from './Logo';
import CalendarButton from './CalendarButton';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderWrapper>
					<Menu />
					<Logo />
					<CalendarButton />
				</HeaderWrapper>
			</HeaderContainer>
		</>
	);
};

const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: #edf1f7;
	position: relative;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export default Header;
