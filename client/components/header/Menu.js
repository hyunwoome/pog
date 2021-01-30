import styled from 'styled-components';
import MenuList from './MenuList';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useState } from 'react';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(!open)}>
				<MenuRoundedIcon />
			</Button>
			<MenuList open={open} setOpen={setOpen} />
		</>
	);
};

const Button = styled.button`
	border: 0;
	background-color: white;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

export default Menu;
