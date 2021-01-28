import styled from 'styled-components';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const Account = () => {
	return (
		<Button>
			<AccountCircleRoundedIcon />
		</Button>
	);
};

const Button = styled.button`
	border: none;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
`;

export default Account;
