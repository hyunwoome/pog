import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

export default function SearchButton() {
	return (
		<Link href="/calendar">
			<Button>
				<a>
					내가찾는 해외골프 <CustomSearchButton />
				</a>
			</Button>
		</Link>
	);
}

const Button = styled.button`
	position: relative;
	margin-left: 8px;
	flex: 2;
	height: 40px;
	/* Special */
	color: #b7b7b7;
	border-radius: 50px;
	text-align: left;
	padding-left: 20px;
	line-height: 37px;
	background-color: var(--color-background);
	border: 1px solid var(--color-border);
`;

const CustomSearchButton = styled(SearchIcon)`
	position: absolute;
	right: 10px;
	top: 7px;
	color: var(--color-font);
`;
