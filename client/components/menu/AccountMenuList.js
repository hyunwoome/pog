import styled from 'styled-components';
import Link from 'next/link';

export default function AccountMenuList() {
	return (
		<AccountMenuContainer>
			<AccountMenuTitle>계정 관리</AccountMenuTitle>
			<AccountMenuTable>
				<AccountMenuTableBody>
					<AccountMenuRow>
						<Link href="/login">
							<AccountMenuCell>
								<a>로그인</a>
							</AccountMenuCell>
						</Link>
						<Link href="/signup">
							<AccountMenuCell>
								<a>회원가입</a>
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
					</AccountMenuRow>
				</AccountMenuTableBody>
			</AccountMenuTable>
		</AccountMenuContainer>
	);
}

const AccountMenuContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--color-background);
	padding: ;
`;

const AccountMenuTitle = styled.h3`
	font-weight: 400;
`;

const AccountMenuTable = styled.table`
	width: 100%;
`;

const AccountMenuTableBody = styled.tbody``;

const AccountMenuRow = styled.tr``;

const AccountMenuCell = styled.td``;
