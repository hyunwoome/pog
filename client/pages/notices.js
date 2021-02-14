import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';

export async function getStaticProps() {
	const res = await fetch('http://localhost:1337/notices');
	const noticeItem = await res.json();

	return {
		props: {
			noticeItem,
		},
	};
}

export default function Notices({ noticeItem }) {
	const router = useRouter();
	const homeButton = () => {
		router.push('/');
	};
	const noticeBoard = noticeItem.map((data) => (
		<Link href={`/notices/${data.id}`} key={data.id}>
			<a>
				<NoticesCardWrapper>
					<ContentWrapper>
						<NoticesTitle>{data.title}</NoticesTitle>
						<NoticesDate>{data.date}</NoticesDate>
					</ContentWrapper>
					<IconWrapper>
						<ArrowForwardIosIcon fontSize="small" color="action" />
					</IconWrapper>
				</NoticesCardWrapper>
			</a>
		</Link>
	));

	return (
		<div>
			<BackButton
				title="공지사항"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<NoticesContainer>
				<NoticesWrapper>{noticeBoard}</NoticesWrapper>
			</NoticesContainer>
		</div>
	);
}

const NoticesContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	text-align: center;
`;

const NoticesTitleWrapper = styled.h3`
	font-weight: 400;
	margin: 0;
	margin-bottom: 16px;
`;

const NoticesWrapper = styled.div``;

const NoticesCardWrapper = styled.div`
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

const NoticesTitle = styled.h4`
	margin: 0;
	font-weight: 400;
`;

const NoticesDate = styled.div`
	font-size: 0.75rem;
	margin-top: 4px;
	color: #919191;
`;

const IconWrapper = styled.div``;
