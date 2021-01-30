import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import Account from './Account';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderWrapper>
					<Menu />
					<Logo />
				</HeaderWrapper>
				<Account />
			</HeaderContainer>
		</>
	);
};

const HeaderContainer = styled.div`
	width: 100%;
	height: 45px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
	position: relative;
	border-bottom: 1px solid #c4c4c4;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export default Header;
