import styled from 'styled-components';
import Link from 'next/link';

export default function GolfItemMenuList() {
	return (
		<GolfItemMenuContainer>
			<GolfItemMenuTitle>골프 상품</GolfItemMenuTitle>
			<GolfItemMenuTable>
				<colgroup>
					<col
						style={{
							borderRight: '1px solid var(--color-border)',
							columnSpan: 1,
						}}
					/>
				</colgroup>
				<GolfItemMenuTableBody>
					<GolfItemMenuRow>
						<Link href="/product:sale">
							<GolfItemMenuCell>
								<a style={{ color: 'var(--color-primary)' }}>초특가</a>
							</GolfItemMenuCell>
						</Link>
						<Link href="/product:taiwan">
							<GolfItemMenuCell>
								<a>태국</a>
							</GolfItemMenuCell>
						</Link>
					</GolfItemMenuRow>

					<GolfItemMenuRow>
						<Link href="/product:china">
							<GolfItemMenuCell>
								<a>중국</a>
							</GolfItemMenuCell>
						</Link>
						<Link href="/product:japan">
							<GolfItemMenuCell>
								<a>일본</a>
							</GolfItemMenuCell>
						</Link>
					</GolfItemMenuRow>

					<GolfItemMenuRow>
						<Link href="/product:vietnam">
							<GolfItemMenuCell>
								<a>베트남</a>
							</GolfItemMenuCell>
						</Link>
						<Link href="/product:philippines">
							<GolfItemMenuCell>
								<a>필리핀</a>
							</GolfItemMenuCell>
						</Link>
					</GolfItemMenuRow>

					<GolfItemMenuRow>
						<Link href="/product:guam">
							<GolfItemMenuCell>
								<a>괌, 사이판</a>
							</GolfItemMenuCell>
						</Link>
						<Link href="/product:asia">
							<GolfItemMenuCell>
								<a>기타아시아</a>
							</GolfItemMenuCell>
						</Link>
					</GolfItemMenuRow>

					<GolfItemMenuRow>
						<Link href="/product:korea">
							<GolfItemMenuCell>
								<a>국내투어</a>
							</GolfItemMenuCell>
						</Link>
						<Link href="/product:local">
							<GolfItemMenuCell>
								<a>지방출발</a>
							</GolfItemMenuCell>
						</Link>
					</GolfItemMenuRow>
				</GolfItemMenuTableBody>
			</GolfItemMenuTable>
		</GolfItemMenuContainer>
	);
}

const GolfItemMenuContainer = styled.div`
	width: 100%;
	padding: 8px 16px 32px 16px;
	background-color: var(--color-background);
	margin-top: 12px;
`;

const GolfItemMenuTitle = styled.h3`
	font-weight: 400;
`;

const GolfItemMenuTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 0.875rem;
	font-weight: 300;
	&:nth-child(2) {
		border-top: 1px solid black;
	}
`;

const GolfItemMenuTableBody = styled.tbody``;

const GolfItemMenuRow = styled.tr``;

const GolfItemMenuCell = styled.td`
	width: 50%;
	padding: 8px;
	border-bottom: 1px solid var(--color-border);
	cursor: pointer;
`;
