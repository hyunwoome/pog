import styled from 'styled-components';
import Title from '../components/common/Title';

export default function MyPage() {
	return (
		<MyPageContainer>
			<MyPageWrapper>
				<MyPageForm>
					<Title title="마이페이지" />
				</MyPageForm>
			</MyPageWrapper>
		</MyPageContainer>
	);
}

const MyPageContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

const MyPageWrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MyPageForm = styled.form`
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
	}
	margin-bottom: 25px;
`;
