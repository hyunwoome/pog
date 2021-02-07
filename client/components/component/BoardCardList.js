import styled from 'styled-components';
import Image from 'next/image';

export default function BoardCardList() {
	const myLoader = (data) => {
		return `https://dummyimage.com/360x180/d6bfff/${data.src}`;
	};

	const sampleData = [
		{
			id: 1,
			country: '태국',
			title: '[촌부리] 푸탈루앙C.C 1박2일',
			rating: 5,
			src: '/000000.png',
		},
		{
			id: 2,
			country: '태국',
			title: '[촌부리] 푸탈루앙C.C 1박2일',
			rating: 5,
			src: '/000000.png',
		},
		{
			id: 3,
			country: '태국',
			title: '[촌부리] 푸탈루앙C.C 1박2일',
			rating: 5,
			src: '/000000.png',
		},
		{
			id: 4,
			country: '태국',
			title: '[촌부리] 푸탈루앙C.C 1박2일',
			rating: 5,
			src: '/000000.png',
		},
		{
			id: 5,
			country: '태국',
			title: '[촌부리] 푸탈루앙C.C 1박2일',
			rating: 5,
			src: '/000000.png',
		},
	];

	const BoardCardListMap = sampleData.map((data) => (
		<CardContainer>
			<CardImageWrapper>
				<CustomImage
					loader={myLoader}
					src={data.src}
					alt="sample image"
					width={200}
					height={150}
					layout="responsive"
				/>
			</CardImageWrapper>
			<RatingContainer></RatingContainer>
		</CardContainer>
	));

	return <BoardCardListContainer>{BoardCardListMap}</BoardCardListContainer>;
}

const BoardCardListContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
	gap: 16px;
`;

const CardContainer = styled.div`
	width: 100%;
	border-radius: 5px;
	border: 1px solid var(--color-border);
`;

const CardImageWrapper = styled.div`
	max-width: 120px;
`;

const CustomImage = styled(Image)`
	border-top-left-radius: 5px;
`;

const RatingContainer = styled.div`
	width: 100%;
	height: 46px;
	border-top: 1px solid var(--color-border);
`;
