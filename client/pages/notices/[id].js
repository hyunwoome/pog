import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';

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
	const homeButton = () => {
		router.push('/');
	};
	return (
		<div>
			<BackButton
				title="공지사항"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<NoticeContainer>
				<NoticeTitleDateWrapper>
					<NoticeTitle>{notice.title}</NoticeTitle>
					<NoticeDate>{notice.date}</NoticeDate>
				</NoticeTitleDateWrapper>
				<NoticeContentWrapper>{notice.content}</NoticeContentWrapper>
			</NoticeContainer>
		</div>
	);
}

const NoticeContainer = styled.div`
	width: 100%;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	min-height: 90vh;
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
	margin: 16px 8px;
	white-space: pre-wrap;
`;
