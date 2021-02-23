import styled from 'styled-components';
import BackButton from '../component/BackButton';
import Router from 'next/router';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

export default function NeedLogin() {
	function homeButton() {
		Router.push('/');
	}
	function loginButton() {
		Router.push('/login');
	}
	return (
		<>
			<BackButton
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<NeedLoginContainer>
				<NeedLoginWrapper>
					<NeedLoginTitleWrapper>
						<NeedLoginTitle>로그인이 필요합니다.</NeedLoginTitle>
					</NeedLoginTitleWrapper>
					<Button onClick={loginButton}>로그인</Button>
				</NeedLoginWrapper>
			</NeedLoginContainer>
		</>
	);
}

const NeedLoginContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
`;

const NeedLoginWrapper = styled.div`
	height: 100%;
	padding: 0 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const NeedLoginTitleWrapper = styled.div`
	margin-bottom: 48px;
`;

const NeedLoginTitle = styled.h2`
	margin: 0;
	font-weight: 400;
`;

const Button = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 16px;
	background-color: var(--color-primary);
	color: var(--color-background);
	font-size: 1rem;
	margin-bottom: 16px;
	cursor: pointer;
`;
