import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function ReviewItem() {
	return (
		<Link href="/">
			<a>
				<ReviewItemContainer>
					<ImageWrapper>
						<ReviewImage
							src="/images/chiangmai.jpg"
							width={200}
							height={150}
							layout="fixed"
						/>
					</ImageWrapper>
					<TextWrapper>
						<CountryNameText>태국</CountryNameText>
						<CCNameText>&nbsp; 치앙마이 CC</CCNameText>
						<ReviewRating>&nbsp; 4.5 / 5</ReviewRating>
						<ReviewContent>골프장이 깨끗하고 친절합니다.</ReviewContent>
						<ReviewDate>2021-05-05 14:30:28</ReviewDate>
						<Nickname>&nbsp; 김남윤</Nickname>
					</TextWrapper>
				</ReviewItemContainer>
			</a>
		</Link>
	);
}

const ReviewItemContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	box-shadow: 1px 1px 5px gray;
	border-radius: 10px;
	padding: 10px;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

const ImageWrapper = styled.div`
	@media screen and (max-width: 571px) {
		display: none;
	}
`;

const ReviewImage = styled(Image)`
	border-radius: 5px;
`;

const TextWrapper = styled.div`
	margin-left: 20px;
`;

const CountryNameText = styled.span`
	font-size: 0.8rem;
	color: grey;
`;

const CCNameText = styled.span`
	font-size: 0.9rem;
`;

const ReviewRating = styled.span`
	font-size: 0.8rem;
`;

const ReviewContent = styled.div`
	font-size: 0.8rem;
`;

const ReviewDate = styled.span`
	font-size: 0.7rem;
`;

const Nickname = styled.span`
	font-size: 0.7rem;
`;
