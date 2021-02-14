import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';

export async function getStaticProps({ params: { id } }) {
	const res = await fetch(`http://localhost:1337/questions/?id=${id}`);
	const found = await res.json();
	return {
		props: {
			question: found[0],
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

export default function QuestionDetail({ question }) {
	const homeButton = () => {
		router.push('/');
	};
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
						{question.check ? (
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
		</div>
	);
}

const QuestionDetailContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	padding: 86px 16px 32px 16px;
	min-height: 90vh;
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
	color: #919191;
	display: flex;
	width: 120px;
	justify-content: space-between;
`;

const QuestionDetailContentWrapper = styled.div`
	margin-top: 16px;
	font-size: 0.875rem;
	margin: 16px 8px;
`;

const QuestionIcons = styled.div`
	flex: 2;
	text-align: right;
	padding-right: 8px;
`;
