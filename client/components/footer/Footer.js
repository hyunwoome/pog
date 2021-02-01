import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterMenu>
				<Link href="/">
					<a>이용약관</a>
				</Link>
				<Link href="/">
					<a>개인정보처리방침</a>
				</Link>
				<Link href="/">
					<a>고객센터</a>
				</Link>
			</FooterMenu>
			<FooterContent>
				<span>
					(주)프라이드오브골프 | 대표: 김남윤 | 사업자등록번호: 123-12-12345
				</span>
				<span>통신판매신고번호: 제2021-서울강남-0000호</span>
				<span>소재지: 서울특별시 강남구 강남대로</span>
				<span>Copyright Pride Of Golf Corp. All Right Reserved.</span>
			</FooterContent>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	width: 100%;
	height: 15vh;
	padding: 0 20px;
	border-top: 1px solid lightgrey;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #edf1f7;
`;

const FooterMenu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 10px;
	font-size: 0.8rem;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	font-size: 0.7rem;
	height: 75px;
`;

export default Footer;
