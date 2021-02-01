import styled from 'styled-components';
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';

export default function CalendarButton() {
	return (
		<Link href="/calendar">
			<Button>
				<ButtonAnchor>내가찾는 해외골프</ButtonAnchor>
				<SearchCustomIcon fontSize="small" />
			</Button>
		</Link>
	);
}

const Button = styled.button`
	margin-left: 15px;
	height: 40px;
	background-color: white;
	border: 0;
	border-radius: 20px;
	padding: 0.5rem 0 0.5rem 1.5rem;
	flex: 2;
	text-align: left;
	box-shadow: 1px 1px 2px gray;

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

const ButtonAnchor = styled.a`
	font-size: 0.8rem;
	color: gray;
`;

const SearchCustomIcon = styled(SearchIcon)`
	position: absolute;
	top: 25px;
	right: 30px;
`;
