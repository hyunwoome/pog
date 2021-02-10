import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/link';

export async function getStaticProps() {
	const res = await fetch('http://localhost:3000/api/notice/');
	const noticeItem = await res.json();

	return {
		props: {
			noticeItem,
		},
	};
}

export default function Notice({ noticeItem }) {
	const noticeBoard = noticeItem.map((data) => (
		<Link href={`/notice/${data.id}`} key={data.id}>
			<a>
				<NoticeCardWrapper>
					<ContentWrapper>
						<NoticeTitle>{data.title}</NoticeTitle>
						<NoticeDate>{data.date}</NoticeDate>
					</ContentWrapper>
					<IconWrapper>
						<ArrowForwardIosIcon fontSize="small" color="action" />
					</IconWrapper>
				</NoticeCardWrapper>
			</a>
		</Link>
	));

	return (
		<div>
			<BackButton />
			<NoticeContainer>
				<NoticeTitleWrapper>공지사항</NoticeTitleWrapper>
				<NoticeWrapper>{noticeBoard}</NoticeWrapper>
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
	margin-bottom: 16px;
`;

const NoticeWrapper = styled.div``;

const NoticeCardWrapper = styled.div`
	border-bottom: 1px solid var(--color-border);
	text-align: left;
	padding: 16px 8px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ContentWrapper = styled.div`
	padding-right: 8px;
`;

const NoticeTitle = styled.h4`
	margin: 0;
	font-weight: 400;
`;

const NoticeDate = styled.div`
	font-size: 0.75rem;
	margin-top: 4px;
	color: #919191;
`;

const IconWrapper = styled.div``;
