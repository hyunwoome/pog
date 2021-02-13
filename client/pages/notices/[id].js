import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';

export async function getStaticProps({ params: { id } }) {
	const res = await fetch(`http://localhost:1337/notices/?id=${id}`);
	const found = await res.json();
	return {
		props: {
			notice: found[0],
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:1337/notices/`);
	const notices = await res.json();
	return {
		paths: notices.map((notice) => ({
			params: { id: notice.id },
		})),
		fallback: false,
	};
}

export default function Notices({ notice }) {
	return (
		<div>
			<BackButton />
			<NoticeContainer>
				<NoticeTitleDateWrapper>
					<NoticeTitle>{notice.title}</NoticeTitle>
					<NoticeDate>{notice.date}</NoticeDate>
				</NoticeTitleDateWrapper>
				<NoticeContentWrapper>
					<p>{notice.content}</p>
				</NoticeContentWrapper>
			</NoticeContainer>
		</div>
	);
}

const NoticeContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
`;

const NoticeTitleDateWrapper = styled.div`
	border-bottom: 1px solid var(--color-border);
	padding-bottom: 20px;
`;

const NoticeTitle = styled.h3`
	font-weight: 400;
	margin: 32px 0 0 0;
`;

const NoticeDate = styled.div`
	font-size: 0.75rem;
	margin-top: 4px;
	color: #919191;
`;

const NoticeContentWrapper = styled.div`
	margin-top: 16px;
	font-size: 0.875rem;
`;
