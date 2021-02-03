import styled from 'styled-components';
import Logo from '../component/Logo';
import SearchButton from '../component/SearchButton';

export default function Header() {
	return (
		<>
			<HeaderContainer>
				<Logo />
				<SearchButton />
			</HeaderContainer>
		</>
	);
}

const HeaderContainer = styled.header`
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	padding: 0 8px;
	border-bottom: 1px solid #e0e0e0;
	background-color: #ffffff;
`;
