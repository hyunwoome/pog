import styled from 'styled-components';
import BackButton from '../components/component/BackButton';

export default function Question() {
	return (
		<div>
			<BackButton />
			<QuestionContainer>
				<QuestionTitleWrapper>견적문의</QuestionTitleWrapper>
			</QuestionContainer>
		</div>
	);
}

const QuestionContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	text-align: center;
`;

const QuestionTitleWrapper = styled.h3`
	font-weight: 400;
	margin: 0;
	margin-bottom: 16px;
`;
