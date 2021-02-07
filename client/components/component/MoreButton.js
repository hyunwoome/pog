import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';

export default function MoreButton() {
	return (
		<Link href="/">
			<MoreButtonContainer>
				<MoreButtonAnchor>더보기</MoreButtonAnchor>
				<ArrowForwardIcon fontSize="small" />
			</MoreButtonContainer>
		</Link>
	);
}

const MoreButtonContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: var(--color-background);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const MoreButtonAnchor = styled.a`
	font-size: 0.875rem;
	margin-right: 4px;
`;
