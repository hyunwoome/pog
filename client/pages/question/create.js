import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';
import BaseInput from '../../components/component/BaseInput';

export default function QuestionCreate() {
	const router = useRouter();
	const homeButton = () => {
		router.push('/');
	};

	const submitQuestion = async (event) => {
		event.preventDefault();

		const day = new Date();
		const dd = String(day.getDate()).padStart(2, '0');
		const mm = String(day.getMonth() + 1).padStart(2, '0');
		const yyyy = day.getFullYear();
		const today = `${yyyy}-${mm}-${dd}`;
		console.log(today);

		const res = await fetch('http://localhost:1337/questions', {
			body: JSON.stringify({
				title: event.target.title.value,
				content: event.target.content.value,
				date: today,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
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
					<form onSubmit={submitQuestion}>
						<BaseInput
							type="text"
							placeholder="제목을 입력하세요"
							required={true}
							id="title"
						/>
						<QuestionCreateTextarea
							placeholder="내용을 입력하세요"
							id="content"
							required
						/>
						<Button type="submit">작성완료</Button>
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
