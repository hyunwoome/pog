import styled from 'styled-components';
import Tabs from '../components/main/Tabs';

export default function Home() {
	return (
		<HomeContainer>
			<HomeWrapper>
				<Tabs />
			</HomeWrapper>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

const HomeWrapper = styled.div`
	width: 100%;
`;
