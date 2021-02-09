import styled from 'styled-components';
import BackButton from '../components/component/BackButton';

export default function Notice() {
	return (
		<div>
			<BackButton />
			<NoticeContainer>
				<NoticeTitleWrapper>공지사항</NoticeTitleWrapper>
			</NoticeContainer>
		</div>
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

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
