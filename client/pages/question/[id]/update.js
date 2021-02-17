import styled from 'styled-components';
import BackButton from '../../../components/component/BackButton';
import BaseInput from '../../../components/component/BaseInput';
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

export default function Update({ question }) {
	const router = useRouter();
	const homeButton = () => {
		router.push('/');
	};
	const pushQuestion = () => {
		router.push('/question');
	};

	const queryId = router.query.id;
	const updateQuestion = async (event) => {
		event.preventDefault();

		const res = await fetch(`http://localhost:1337/questions/${queryId}`, {
			body: JSON.stringify({
				title: event.target.title.value,
				content: event.target.content.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
		});
		pushQuestion();
	};

	return (
		<div>
			<BackButton
				title="견적문의하기"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<QuestionCreateContainer>
				<QuestionCreateContentWrapper>
					<form onSubmit={updateQuestion}>
						<BaseInput
							type="text"
							required={true}
							id="title"
							defaultValue={question.title}
						/>
						<QuestionCreateTextarea
							id="content"
							required
							defaultValue={question.content}
						/>
						<Button type="submit">수정완료</Button>
					</form>
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

const QuestionCreateContentWrapper = styled.div`
	padding: 8px 16px;
`;

const QuestionCreateTextarea = styled.textarea`
	width: 100%;
	border: 1px solid var(--color-border);
	padding: 16px;
	font-size: 1.3rem;
	border-radius: 3px;
	margin-bottom: 16px;
	&::placeholder {
		color: var(--color-placeholder);
	}
	resize: none;
	height: 300px;
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
	margin-bottom: 16px;
	cursor: pointer;
`;
