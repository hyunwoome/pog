import styled from 'styled-components';
import Image from 'next/image';

export default function MediaCardGrid() {
	const myLoader = (data) => {
		return `https://dummyimage.com/360x180/d6bfff/${data.src}`;
	};

	const sampleData = [
		{
			id: 1,
			country: '베트남',
			title: '하노이-피닉스 CC',
			price: '130,000원',
			src: '/000000.png',
		},
		{
			id: 2,
			country: '베트남',
			title: '하노이-피닉스 CC',
			price: '130,000원',
			src: '/000000.png',
		},
		{
			id: 3,
			country: '베트남',
			title: '하노이-피닉스 CC',
			price: '130,000원',
			src: '/000000.png',
		},
		{
			id: 4,
			country: '베트남',
			title: '하노이-피닉스 CC',
			price: '130,000원',
			src: '/000000.png',
		},
	];

	const MediaCardGridList = sampleData.map((data) => (
		<MediaPaddingContainer key={data.id}>
			<MediaCardItemContainer>
				<MediaImageWrapper>
					<CustomImage
						loader={myLoader}
						src={data.src}
						alt="sample image"
						width={360}
						height={180}
						layout="responsive"
					/>
				</MediaImageWrapper>
				<MediaTextWrapper>
					<CountryText>{data.country}</CountryText>
					<TitleText>{data.title}</TitleText>
					<PriceText>{data.price}</PriceText>
				</MediaTextWrapper>
			</MediaCardItemContainer>
		</MediaPaddingContainer>
	));

	return <MediaCardContainer>{MediaCardGridList}</MediaCardContainer>;
}

const MediaCardContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
	padding: 0 16px;
	gap: 16px;
`;

const MediaPaddingContainer = styled.div`
	margin-top: 8px;
`;

const MediaCardItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

const MediaImageWrapper = styled.div``;

const CustomImage = styled(Image)`
	border-radius: 5px;
`;

const MediaTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
`;

const CountryText = styled.div`
	font-size: 0.875rem;
	color: gray;
`;

const TitleText = styled.div`
	font-size: 1rem;
`;

const PriceText = styled.div`
	font-size: 1rem;
	margin-top: 4px;
	font-weight: 500;
	text-align: right;
`;
