import styled from 'styled-components';
import Title from '../components/common/Title';

export default function FindID() {
	return (
		<FindIDContainer>
			<FindIDWrapper>
				<Title title="아이디 찾기" />
				<FindIDForm>
					<FindIDInput type="email" placeholder="이메일" />
					<FindIDInput type="password" placeholder="비밀번호" />
					<FindIDInput type="password" placeholder="비밀번호 확인" />
					<ButtonWrapper>
						<BackButton>이전</BackButton>
						<FindIDButton>아이디 찾기</FindIDButton>
					</ButtonWrapper>
				</FindIDForm>
			</FindIDWrapper>
		</FindIDContainer>
	);
}

const FindIDContainer = styled.div`
	width: 100%;
	height: 78vh;
	background-color: #edf1f7;
`;

const FindIDWrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FindIDForm = styled.form`
	width: 100%;
	margin-top: 20px;
`;

const FindIDInput = styled.input`
	margin-bottom: 20px;
	width: 100%;
	height: 50px;
	padding-left: 10px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #c4c4c4;
	box-shadow: 1px 1px 2px gray;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
`;

const BackButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 1px solid #1876d1;
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

const FindIDButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 0;
	background-color: #1876d1;
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
