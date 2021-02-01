import styled from 'styled-components';
import GridItem from './GridItem';
import MoreLink from './MoreLink';

export default function MainGridLayout() {
	return (
		<MainGridContainer>
			<MoreLink href="/" text={'해당 상품 더보기'} />
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
	background-color: #edf1f7;
`;

const MainGridWrapper = styled.div`
	width: 100%;
	padding: 5px 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 10px;

	@media screen and (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;
