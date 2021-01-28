import styled from 'styled-components';
import Tabs from '../components/main/Tabs';

const Home = () => {
	return (
		<HomeContainer>
			<HomeWrapper>
				<Tabs />
			</HomeWrapper>
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	width: 100%;
	height: 80vh;
	/* background-color: white; */
`;

const HomeWrapper = styled.div`
	width: 100%;
`;

export default Home;
