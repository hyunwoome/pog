import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
	return (
		<HeaderContainer>
			<Menu />
			<Logo />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
`;

export default Header;
