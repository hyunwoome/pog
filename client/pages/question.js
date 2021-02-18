import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import Link from 'next/link';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps() {
	const res = await fetch('http://localhost:1337/questions');
	const data = await res.json();
	return {
		props: { data },
	};
}

export default function Question({ data }) {
	const router = useRouter();
	const pushCreate = () => {
		router.push('/question/create');
	};

	const QuestionItem = data
		.slice(0)
		.reverse()
		.map((item) => (
			<Link href={`/question/${item.id}`} key={item.id}>
				<a>
					<QuestionItemWrapper>
						{/* <QuestionNumber>{index + 1}</QuestionNumber> */}
						<QuestionMetaWrapper>
							<QuestionTitle>{item.title}</QuestionTitle>
							<QuestionDateAuthorWrapper>
								<QuestionAuthor>{item.author}</QuestionAuthor>
								<QuestionDate>{item.published_at.slice(0, 10)}</QuestionDate>
							</QuestionDateAuthorWrapper>
						</QuestionMetaWrapper>
						<QuestionIcons>
							{item.questionField.length !== 0 ? (
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
				color="#2296f2"
				buttonHandle={pushCreate}
				icon={CreateRoundedIcon}
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

const QuestionTitle = styled.h3`
	margin-bottom: 4px;
	font-weight: 400;
	font-size: 1rem;
	text-align: left;
	margin: 0;
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

const QuestionAuthor = styled.div`
	font-weight: 300;
`;

const QuestionDate = styled.div`
	font-weight: 300;
`;

const QuestionIcons = styled.div`
	flex: 2;
	text-align: right;
`;
