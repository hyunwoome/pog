import styled from 'styled-components';
import InputIcon from '@material-ui/icons/Input';
import GridItem from './GridItem';
import Link from 'next/link';

export default function MainGridLayout() {
	return (
		<MainGridContainer>
			<ItemDetailLink>
				<Link href="/">
					<Anchor>
						상품 더보기 &nbsp;
						<InputIcon style={{ fontSize: '1.3rem' }} />
					</Anchor>
				</Link>
			</ItemDetailLink>
			<MainGridWrapper>
				<GridItem />
				<GridItem />
				<GridItem />
			</MainGridWrapper>
		</MainGridContainer>
	);
}

const MainGridContainer = styled.div`
	width: 100%;
	height: 30vh;
	background-color: white;
`;

const MainGridWrapper = styled.div`
	width: 100%;
	padding: 5px 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;

	@media screen and (max-width: 400px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const ItemDetailLink = styled.div`
	padding-right: 15px;
	display: flex;
	justify-content: flex-end;
`;

const Anchor = styled.a`
	display: flex;
	font-size: 0.8rem;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;
