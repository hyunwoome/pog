import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function GridItem() {
	return (
		<Link href="/">
			<a>
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
			</a>
		</Link>
	);
}

const GridItemContainer = styled.div`
	border: 1px solid #c4c4c4;
	box-shadow: 1px 1px 5px gray;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
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
