import styled from 'styled-components';
import Title from '../components/common/Title';

export default function Signup() {
	return (
		<SignupContainer>
			<SignupWrapper>
				<Title title="회원가입" />
				<SignupForm>
					<SignupInput type="text" placeholder="이름" />
					<SignupInput type="text" placeholder="닉네임" />
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
}

const SignupContainer = styled.div`
	width: 100%;
	height: 78vh;
	background-color: #edf1f7;
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
	margin-top: 20px;
`;

const SignupInput = styled.input`
	margin-bottom: 20px;
	width: 100%;
	height: 50px;
	padding-left: 10px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #c4c4c4;
	box-shadow: 1px 1px 2px gray;

	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
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
	box-shadow: 1px 1px 2px gray;

	&:hover {
		cursor: pointer;
		opacity: 0.5;
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
	box-shadow: 1px 1px 2px gray;

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
	margin-bottom: 25px;
`;
