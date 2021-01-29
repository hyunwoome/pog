import styled from 'styled-components';
import Title from '../components/main/Title';

const FindID = () => {
	return (
		<FindIDContainer>
			<FindIDWrapper>
				<FindIDForm>
					<Title title="아이디 찾기" />
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
};

const FindIDContainer = styled.div`
	width: 100%;
	height: 78vh;
	background-color: white;
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
`;

const FindIDInput = styled.input`
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
	border: 1px solid #458ad8;
	background-color: white;
	color: black;
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
	}
	margin-bottom: 25px;
`;

const FindIDButton = styled.button`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: 0;
	background-color: #458ad8;
	color: white;
	font-size: 1.2rem;
	margin-left: 10px;
	&:hover {
		cursor: pointer;
	}
	margin-bottom: 25px;
`;

export default FindID;
