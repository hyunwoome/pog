import styled from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Menu = () => {
	return (
		<Button>
			<MenuRoundedIcon />
		</Button>
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
