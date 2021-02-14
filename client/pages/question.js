import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import Link from 'next/link';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

export async function getServerSideProps() {
	const res = await fetch('http://localhost:1337/questions');
	const data = await res.json();
	return {
		props: { data },
	};
}

export default function Question({ data }) {
	const QuestionItem = data.map((item) => (
		<Link href={`/question/${item.id}`} key={item.id}>
			<a>
				<QuestionItemWrapper>
					<QuestionNumber>{item.number}</QuestionNumber>
					<QuestionMetaWrapper>
						<QuestionTitle>{item.title}</QuestionTitle>
						<QuestionDateAuthorWrapper>
							<QuestionAuthor>{item.author}</QuestionAuthor>
							<QuestionDate>{item.date}</QuestionDate>
						</QuestionDateAuthorWrapper>
					</QuestionMetaWrapper>
					<QuestionIcons>
						{item.check ? (
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
				</QuestionItemWrapper>
			</a>
		</Link>
	));

	return (
		<div>
			<BackButton
				title="견적문의"
				icon={CreateRoundedIcon}
				color="#2296f2"
				// ! create 함수 작성하기
				// buttonHandle={homeButton}
			/>
			<QuestionContainer>
				<QuestionContentWrapper>{QuestionItem}</QuestionContentWrapper>
			</QuestionContainer>
		</div>
	);
}

const QuestionContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 0px 32px 0px;
	text-align: center;
`;

const QuestionTitleWrapper = styled.h3`
	font-weight: 400;
	width: 100%;
	margin: 0;
	margin-bottom: 16px;
`;

const QuestionContentWrapper = styled.div`
	width: 100%;
	margin-bottom: 16px;
`;

const QuestionItemWrapper = styled.div`
	border-bottom: 1px solid var(--color-border);
	padding: 16px 24px 16px 8px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 0.875rem;
`;

const QuestionNumber = styled.div`
	width: 36px;
`;

const QuestionTitle = styled.div`
	margin-bottom: 4px;
	font-size: 1rem;
	text-align: left;
`;

const QuestionMetaWrapper = styled.div`
	margin-left: 8px;
`;

const QuestionDateAuthorWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	color: #9ca4ab;
	width: 150px;
`;

const QuestionAuthor = styled.div``;

const QuestionDate = styled.div``;

const QuestionIcons = styled.div`
	flex: 2;
	text-align: right;
`;

const ButtonWrapper = styled.div`
	padding: 0 16px 0 16px;
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
