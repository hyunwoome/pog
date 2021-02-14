import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';
import BaseInput from '../../components/component/BaseInput';

export default function QuestionCreate() {
	return (
		<div>
			<BackButton />
			<QuestionCreateContainer>
				<QuestionCreateTitleWrapper>견적문의하기</QuestionCreateTitleWrapper>
				<QuestionCreateContentWrapper>
					<BaseInput type="text" placeholder="제목" />
					<QuestionCreateTextArea placeholder="내용" />
				</QuestionCreateContentWrapper>
			</QuestionCreateContainer>
		</div>
	);
}

const QuestionCreateContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 0px 32px 0px;
	text-align: center;
`;

const QuestionCreateTitleWrapper = styled.h3`
	font-weight: 400;
	width: 100%;
	margin: 0;
	margin-bottom: 16px;
`;

const QuestionCreateContentWrapper = styled.div`
	padding: 8px 16px;
`;

const QuestionCreateTextArea = styled.textarea`
	width: 100%;
	border: 1px solid var(--color-border);
	padding: 16px;
	font-size: 1.2rem;
	border-radius: 3px;
	margin-bottom: 16px;
	&::placeholder {
		color: var(--color-placeholder);
	}
`;
