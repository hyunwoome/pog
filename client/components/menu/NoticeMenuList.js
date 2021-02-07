import styled from 'styled-components';
import Link from 'next/link';

export default function NoticeMenuList() {
	return (
		<NoticeMenuContainer>
			<NoticeItemMenuTitle>기타 문의</NoticeItemMenuTitle>
			<NoticeMenuTable>
				<colgroup>
					<col
						style={{
							borderRight: '1px solid var(--color-border)',
							columnSpan: 1,
						}}
					/>
				</colgroup>
				<NoticeMenuTableBody>
					<NoticeMenuRow>
						<Link href="/notice">
							<NoticeMenuCell>
								<a>공지사항</a>
							</NoticeMenuCell>
						</Link>
						<Link href="/question">
							<NoticeMenuCell>
								<a>견적문의</a>
							</NoticeMenuCell>
						</Link>
					</NoticeMenuRow>

					<NoticeMenuRow>
						<Link href="/board">
							<NoticeMenuCell>
								<a>후기게시판</a>
							</NoticeMenuCell>
						</Link>
						<NoticeMenuCell style={{ cursor: 'unset' }}></NoticeMenuCell>
					</NoticeMenuRow>
				</NoticeMenuTableBody>
			</NoticeMenuTable>
		</NoticeMenuContainer>
	);
}

const NoticeMenuContainer = styled.div`
	width: 100%;
	padding: 8px 16px 32px 16px;
	background-color: var(--color-background);
	margin-top: 12px;
`;

const NoticeItemMenuTitle = styled.h3`
	font-weight: 400;
`;

const NoticeMenuTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 0.875rem;
	font-weight: 300;
	&:nth-child(2) {
		border-top: 1px solid black;
	}
`;

const NoticeMenuTableBody = styled.tbody``;

const NoticeMenuRow = styled.tr``;

const NoticeMenuCell = styled.td`
	width: 50%;
	padding: 8px;
	border-bottom: 1px solid var(--color-border);
	cursor: pointer;
`;
