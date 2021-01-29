import styled from 'styled-components';
import MenuList from './MenuList';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Menu = () => {
	return (
		<>
			<Button>
				<MenuRoundedIcon />
			</Button>
			{/* <MenuList /> */}
		</>
	);
};

const Button = styled.button`
	border: 0;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
`;

export default Menu;
