import styled from 'styled-components';
import Title from '../components/main/Title';

const Signup = () => {
	return (
		<SignupContainer>
			<SignupWrapper>
				<SignupForm>
					<Title title="회원가입" />
					<SignupInput type="text" placeholder="이름" />
					<SignupInput type="text" placeholder="생년월일 (2020 01 01)" />
					<SignupInput type="email" placeholder="이메일" />
					<SignupInput type="number" placeholder="휴대폰 번호" />
					<SignupInput type="password" placeholder="비밀번호" />
					<SignupInput type="password" placeholder="비밀번호 확인" />
					<ButtonWrapper>
						<BackButton>이전</BackButton>
						<SignupButton>회원가입</SignupButton>
					</ButtonWrapper>
				</SignupForm>
			</SignupWrapper>
		</SignupContainer>
	);
};

const SignupContainer = styled.div`
	width: 100%;
	height: 78vh;
	background-color: white;
`;

const SignupWrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SignupForm = styled.form`
	width: 100%;
`;

const SignupInput = styled.input`
	margin-bottom: 20px;
	width: 100%;
	height: 50px;
	padding-left: 10px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #c4c4c4;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
`;

const BackButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 1px solid #ea3284;
	background-color: white;
	color: black;
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
	}
	margin-bottom: 25px;
`;

const SignupButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 0;
	background-color: #ea3284;
	color: white;
	font-size: 1.2rem;
	margin-left: 10px;
	&:hover {
		cursor: pointer;
	}
	margin-bottom: 25px;
`;

export default Signup;
