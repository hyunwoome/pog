import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import MoreLink from './MoreLink';

export default function MainReviewLayout() {
	return (
		<MainReviewContainer>
			<MoreLink href="/" text={'후기 더보기'} />
			<MainReviewWrapper>
				<ReviewItem />
				<ReviewItem />
				<ReviewItem />
			</MainReviewWrapper>
		</MainReviewContainer>
	);
}

const MainReviewContainer = styled.div`
	width: 100%;
	background-color: #edf1f7;
`;

const MainReviewWrapper = styled.div`
	width: 100%;
	padding: 5px 1rem;
`;
