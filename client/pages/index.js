import styled from 'styled-components';
import Title from '../components/common/Title';
import Tabs from '../components/main/Tabs';
import MainGridLayout from '../components/main/MainGridLayout';
import MainReviewLayout from '../components/main/MainReviewLayout';

export default function Home() {
	return (
		<HomeContainer>
			<HomeWrapper>
				<Title title={'골프 상품'} />
				<Tabs />
				<MainGridLayout />
				<Title title={'후기 게시판'} />
				<MainReviewLayout />
			</HomeWrapper>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	background-color: white;
`;

const HomeWrapper = styled.div`
	width: 100%;
	position: relative;
`;
