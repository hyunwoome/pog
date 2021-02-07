import styled from 'styled-components';
import Link from 'next/link';

export default function Footer() {
	const menuList = [
		{
			id: 1,
			title: '회사소개',
			href: '/company',
		},
		{
			id: 2,
			title: '개인정보처리방침',
			href: '/privateinfo',
		},
		{
			id: 3,
			title: '여행약관',
			href: '/policy',
		},
		{
			id: 4,
			title: '고객센터',
			href: '/service',
		},
		{
			id: 5,
			title: '찾아오시는 길',
			href: '/findpath',
		},
	];

	const MenuListMap = menuList.map((item) => (
		<FooterMenuList key={item.id}>
			<Link href={item.href}>
				<a>{item.title}</a>
			</Link>
		</FooterMenuList>
	));

	return (
		<FooterContainer>
			<FooterInnerContainer>
				<FooterMenuContainer>
					<FooterMenuUnorderedList>{MenuListMap}</FooterMenuUnorderedList>
					<FooterTextContainer>
						<FooterTextSpan>
							(주)프라이드 오브 골프 | 대표 : 김남윤 | 사업자등록번호 :
							110-30-25883 | 통신판매업신고 | 강남-1982호 | 메일: kny89@pog.com
							<br />
						</FooterTextSpan>
						<FooterTextSpan>
							관광사업자 등록번호 : 제2021-89호 | 주소 : 서울시 강남구 테헤란로{' '}
							<br />
						</FooterTextSpan>
						<FooterTextSpan>
							Copyright 2021 PRIDE OF GOLF, All Right Reserved.
						</FooterTextSpan>
					</FooterTextContainer>
				</FooterMenuContainer>
			</FooterInnerContainer>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	margin-top: 100px;
	width: 100%;
	border-top: 1px solid var(--color-border);
`;

const FooterInnerContainer = styled.div`
	padding: 16px;
`;

const FooterMenuContainer = styled.div``;

const FooterMenuUnorderedList = styled.ul`
	padding: 0;
	margin: 0 0 8px 0;
`;

const FooterMenuList = styled.li`
	display: inline-block;
	border: 1px solid var(--color-border);
	padding: 4px;
	margin-right: 8px;
	font-size: 0.625rem;
	color: #919191;
`;

const FooterTextContainer = styled.div``;

const FooterTextSpan = styled.span`
	font-size: 0.75rem;
	color: #919191;
`;
