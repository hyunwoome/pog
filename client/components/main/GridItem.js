import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function GridItem() {
	return (
		<Link href="/">
			<a>
				<GridItemContainer>
					<GridImage
						src="/images/artitaya.jpg"
						width={250}
						height={180}
						layout="responsive"
					/>
					<TextWrapper>
						<CountryNameText>태국</CountryNameText>
						<CCNameText>아티타야 CC</CCNameText>
						<PriceText>250,000 원~</PriceText>
					</TextWrapper>
				</GridItemContainer>
			</a>
		</Link>
	);
}

const GridItemContainer = styled.div`
	margin-bottom: 10px;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

const GridImage = styled(Image)`
	border-radius: 5px;
`;

const TextWrapper = styled.div`
	padding-top: 10px;
`;

const CountryNameText = styled.div`
	font-size: 0.8rem;
	color: grey;
`;

const CCNameText = styled.div`
	font-size: 0.9rem;
`;

const PriceText = styled.div``;
