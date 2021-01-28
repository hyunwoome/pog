import styled from 'styled-components';
import Title from '../components/main/Title';

const Login = () => {
	return (
		<LoginContainer>
			<LoginWrapper>
				<Title />
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
`;

export default Login;
