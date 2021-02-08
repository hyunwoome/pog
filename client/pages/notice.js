import styled from 'styled-components';

export default function Notice() {
	return (
		<NoticeContainer>
			<NoticeTitleWrapper>공지사항</NoticeTitleWrapper>
		</NoticeContainer>
	);
}

const NoticeContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	text-align: center;
`;

const NoticeTitleWrapper = styled.h3`
	font-weight: 400;
	margin: 0;
`;
