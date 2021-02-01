import styled from 'styled-components';
import Title from '../components/main/Title';
import Link from 'next/link';

const Login = () => {
	return (
		<LoginContainer>
			<LoginWrapper>
				<Title title="로그인" />
				<LoginForm>
					<LoginInput type="number" placeholder="휴대폰번호" />
					<LoginInput type="password" placeholder="비밀번호" />
					<LoginChecked type="checkbox" name="remember" />
					아이디 기억하기
					<LoginButton>로그인</LoginButton>
				</LoginForm>
				<FindAccount>
					<Link href="/findID">
						<TextAnchor>아이디 찾기</TextAnchor>
					</Link>
					<Link href="/findPW">
						<TextAnchor>비밀번호 찾기</TextAnchor>
					</Link>
					<Link href="/signup">
						<TextAnchor primary>회원가입</TextAnchor>
					</Link>
				</FindAccount>
			</LoginWrapper>
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

const LoginWrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LoginForm = styled.form`
	width: 100%;
`;

const LoginInput = styled.input`
	margin-bottom: 20px;
	width: 100%;
	height: 50px;
	padding-left: 10px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #c4c4c4;
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

const LoginChecked = styled.input`
	margin-bottom: 25px;
`;

const LoginButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 0;
	background-color: #1876d1;
	color: white;
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
	margin-bottom: 25px;
`;

const FindAccount = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const TextAnchor = styled.a`
	font-size: 1rem;
	margin: 0 15px;
	color: ${(props) => (props.primary ? '#ea3284' : 'black')};
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

export default Login;
