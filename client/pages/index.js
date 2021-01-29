import styled from 'styled-components';
import Carousel from '../components/main/Carousel';
import Tabs from '../components/main/Tabs';

const Home = () => {
	return (
		<HomeContainer>
			<HomeWrapper>
				<Carousel />
				<Tabs />
			</HomeWrapper>
		</HomeContainer>
	);
};

const HomeContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

const HomeWrapper = styled.div`
	width: 100%;
`;

export default Home;
