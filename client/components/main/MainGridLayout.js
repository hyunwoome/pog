import styled from 'styled-components';
import GridItem from './GridItem';

export default function MainGridLayout() {
	return (
		<MainGridContainer>
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
	padding: 10px 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 1rem;

	@media screen and (max-width: 400px) {
		grid-template-columns: 1fr 1fr;
	}
`;
