import styled from 'styled-components';
import Image from 'next/image';

export default function GridItem() {
	return (
		<GridItemContainer>
			<Image
				src="/images/artitaya.jpg"
				width={286}
				height={180}
				layout="responsive"
			/>
			<TextWrapper>
				<CountryNameText>태국</CountryNameText>
				<CCNameText>아티타야 CC</CCNameText>
				<PriceText>₩ 250,000</PriceText>
			</TextWrapper>
		</GridItemContainer>
	);
}

const GridItemContainer = styled.div`
	border: 1px solid #c4c4c4;
`;

const TextWrapper = styled.div`
	padding: 10px;
`;

const CountryNameText = styled.div`
	font-size: 0.8rem;
	color: grey;
`;

const CCNameText = styled.div`
	font-size: 1rem;
`;

const PriceText = styled.div`
	font-size: 1.2rem;
`;
