import styled from 'styled-components';
import BackButton from '../../../components/component/BackButton';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';

// ! Fetch Question
export async function getStaticProps({ params: { id } }) {
	const res = await fetch(`http://localhost:1337/questions/?id=${id}`);
	const found = await res.json();
	return {
		props: {
			question: found[0],
			questionField: found[0].questionField[0],
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:1337/questions/`);
	const questions = await res.json();
	return {
		paths: questions.map((question) => ({
			params: { id: question.id },
		})),
		fallback: false,
	};
}

// ! Component
export default function QuestionDetail({ question, questionField }) {
	const router = useRouter();
	const queryId = router.query.id;
	const homeButton = () => {
		router.push('/');
	};
	const pushQuestion = () => {
		router.push('/question');
	};
	const updateButton = () => {
		router.push(`/question/${queryId}/update`);
	};

	// ! DELETE
	const deleteQuestion = async (event) => {
		event.preventDefault();
		const res = await fetch(`http://localhost:1337/questions/${queryId}`, {
			method: 'DELETE',
		});
		pushQuestion();
	};

	const CommentItem = question.questionField
		.slice(0)
		.reverse()
		.map((item) => (
			<CommentContainer key={item.id}>
				<CommentWrapper>
					<CommentContentContainer>
						<CommentTitle>답변완료</CommentTitle>
						<CommentContentWrapper>{item.content}</CommentContentWrapper>
					</CommentContentContainer>
					<CommentMetaWrapper>
						<CommentAuthor>{item.author}</CommentAuthor>
						<CommentDate>{item.date}</CommentDate>
					</CommentMetaWrapper>
				</CommentWrapper>
			</CommentContainer>
		));

	return (
		<div>
			<BackButton
				title="견적문의"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<QuestionDetailContainer>
				<QuestionDetailMetaWrapper>
					<QuestionDetailWrapper>
						<QuestionDetailTitle>{question.title}</QuestionDetailTitle>
						<QuestionDetailDateAuthorWrapper>
							<QuestionAuthor>{question.author}</QuestionAuthor>
							<QuestionDate>{question.date}</QuestionDate>
						</QuestionDetailDateAuthorWrapper>
					</QuestionDetailWrapper>
					<QuestionIcons>
						{question.questionField.length !== 0 ? (
							<CheckCircleOutlineRoundedIcon
								style={{ fontSize: 30, color: '#ff577f' }}
							/>
						) : (
							<CheckCircleOutlineRoundedIcon
								style={{ fontSize: 30 }}
								color="disabled"
							/>
						)}
					</QuestionIcons>
				</QuestionDetailMetaWrapper>
				<QuestionDetailContentWrapper>
					{question.content}
				</QuestionDetailContentWrapper>
			</QuestionDetailContainer>
			{question.questionField.length !== 0 ? CommentItem : null}
			<ButtonWrapper>
				<LinedButton onClick={updateButton}>수정하기</LinedButton>
				<Button onClick={deleteQuestion}>삭제하기</Button>
			</ButtonWrapper>
		</div>
	);
}

const QuestionDetailContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	padding: 86px 16px 32px 16px;
	min-height: 60vh;
`;

const QuestionDetailMetaWrapper = styled.div`
	border-bottom: 1px solid var(--color-border);
	padding-bottom: 20px;
	display: flex;
	align-items: center;
`;

const QuestionDetailWrapper = styled.div`
	margin-left: 8px;
`;

const QuestionDetailTitle = styled.h3`
	font-weight: 400;
	margin: 0;
`;

const QuestionAuthor = styled.div``;

const QuestionDate = styled.div``;

const QuestionDetailDateAuthorWrapper = styled.div`
	font-size: 0.75rem;
	margin-top: 4px;
	color: var(--color-subFont);
	display: flex;
	width: 120px;
	justify-content: space-between;
`;

const QuestionDetailContentWrapper = styled.div`
	margin: 16px 8px;
	white-space: pre-wrap;
`;

const QuestionIcons = styled.div`
	flex: 2;
	text-align: right;
	padding-right: 8px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	padding: 16px;
	background: var(--color-background);
`;

const Button = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 16px;
	background-color: var(--color-primary);
	color: var(--color-background);
	font-size: 1rem;
	cursor: pointer;
`;

const LinedButton = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 14px;
	background-color: var(--color-background);
	color: var(--color-primary);
	border: 2px solid var(--color-primary);
	font-size: 1rem;
	cursor: pointer;
	margin-right: 16px;
`;

const CommentContainer = styled.div`
	background-color: var(--color-background);
	padding: 8px 16px;
`;

const CommentTitle = styled.div`
	font-size: 0.875rem;
	color: var(--color-primary);
`;

const CommentWrapper = styled.div`
	border: 1px solid var(--color-border);
	min-height: 150px;
	border-radius: 3px;
	box-shadow: 3px 3px 1px var(--color-border);
	padding: 8px;
`;

const CommentContentContainer = styled.div`
	min-height: 100px;
`;

const CommentContentWrapper = styled.div`
	white-space: pre-wrap;
	margin-top: 4px;
`;

const CommentMetaWrapper = styled.div`
	display: flex;
	border-top: 1px solid var(--color-border);
	padding-top: 8px;
	font-size: 0.875rem;
	color: var(--color-subFont);
	justify-content: flex-end;
`;

const CommentAuthor = styled.div`
	margin-right: 16px;
`;

const CommentDate = styled.div``;
