import styled from 'styled-components';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Link from 'next/link';

const Account = () => {
	return (
		<Link href="/login">
			<Button>
				<a>
					<AccountCircleRoundedIcon />
				</a>
			</Button>
		</Link>
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
