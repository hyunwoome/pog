import styled from 'styled-components';
import Link from 'next/link';

export default function AccountMenuList() {
	return (
		<AccountMenuContainer>
			<AccountMenuTitle>계정 관리</AccountMenuTitle>
			<AccountMenuTable>
				<colgroup>
					<col
						style={{
							borderRight: '1px solid var(--color-border)',
							columnSpan: 1,
						}}
					/>
				</colgroup>
				<AccountMenuTableBody>
					<AccountMenuRow>
						<Link href="/login">
							<AccountMenuCell>
								<a>로그인</a>
							</AccountMenuCell>
						</Link>
						<Link href="/signup">
							<AccountMenuCell>
								<a style={{ color: '#ff577f' }}>회원가입</a>
							</AccountMenuCell>
						</Link>
					</AccountMenuRow>

					<AccountMenuRow>
						<Link href="/findid">
							<AccountMenuCell>
								<a>아이디 찾기</a>
							</AccountMenuCell>
						</Link>
						<Link href="/findpw">
							<AccountMenuCell>
								<a>비밀번호 찾기</a>
							</AccountMenuCell>
						</Link>
					</AccountMenuRow>

					<AccountMenuRow>
						<Link href="/reservation">
							<AccountMenuCell>
								<a>예약확인</a>
							</AccountMenuCell>
						</Link>
						<AccountMenuCell style={{ cursor: 'unset' }}></AccountMenuCell>
					</AccountMenuRow>
				</AccountMenuTableBody>
			</AccountMenuTable>
		</AccountMenuContainer>
	);
}

const AccountMenuContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 8px 16px 32px 16px;
	background-color: var(--color-background);
`;

const AccountMenuTitle = styled.h3`
	font-weight: 400;
	margin-top: 0;
`;

const AccountMenuTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 0.875rem;
	font-weight: 300;
	&:nth-child(2) {
		border-top: 1px solid black;
	}
`;

const AccountMenuTableBody = styled.tbody``;

const AccountMenuRow = styled.tr``;

const AccountMenuCell = styled.td`
	width: 50%;
	padding: 8px;
	border-bottom: 1px solid var(--color-border);
	cursor: pointer;
`;
