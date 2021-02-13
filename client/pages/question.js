import { StepLabel } from '@material-ui/core';
import styled from 'styled-components';
import BackButton from '../components/component/BackButton';

export async function getServerSideProps() {
	const res = await fetch('http://localhost:1337/questions');
	const data = await res.json();
	return {
		props: { data },
	};
}

export default function Question({ data }) {
	const QuestionItem = data.map((item) => (
		<QuestionItemWrapper key={item.id}>
			<QuestionNumber>
				{item.number}
				<QuestionDate>{item.date}</QuestionDate>
			</QuestionNumber>
			<QuestionTitle>{item.title}</QuestionTitle>
			<QuestionAuthor>{item.author}</QuestionAuthor>

			<QuestionCheck>{item.check}</QuestionCheck>
		</QuestionItemWrapper>
	));

	return (
		<div>
			<BackButton />
			<QuestionContainer>
				<QuestionTitleWrapper>견적문의</QuestionTitleWrapper>
				<QuestionContentWrapper>{QuestionItem}</QuestionContentWrapper>
				<Button>글작성</Button>
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

const QuestionContentWrapper = styled.div`
	width: 100%;
	margin-bottom: 16px;
`;

const QuestionItemWrapper = styled.div`
	border: 1px solid var(--color-border);
	padding: 16px;
`;

const QuestionNumber = styled.div`
	font-size: 0.75rem;
	display: flex;
	justify-content: space-between;
`;

const QuestionDate = styled.div``;

const QuestionTitle = styled.div``;

const QuestionAuthor = styled.div``;

const QuestionCheck = styled.div``;

const Button = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 16px;
	background-color: var(--color-primary);
	color: var(--color-background);
	font-size: 1rem;
	margin-bottom: 16px;
	cursor: pointer;
`;
