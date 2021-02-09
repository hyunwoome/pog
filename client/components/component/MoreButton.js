import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';

export default function MoreButton() {
	return (
		<Link href="/">
			<MoreButtonContainer>
				<MoreButtonWrapper>
					<MoreButtonAnchor>해당 상품 더보기</MoreButtonAnchor>
					<ArrowForwardIcon fontSize="small" />
				</MoreButtonWrapper>
			</MoreButtonContainer>
		</Link>
	);
}

const MoreButtonContainer = styled.div`
	width: 100%;
	padding: 16px;
	background-color: var(--color-background);
`;

const MoreButtonWrapper = styled.div`
	border: 1px solid var(--color-border);
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	cursor: pointer;
`;

const MoreButtonAnchor = styled.a`
	font-size: 0.875rem;
	margin-right: 4px;
`;
