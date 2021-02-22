import Router from 'next/router';
import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useState } from 'react';
import { setCookie } from 'nookies';

export default function Login() {
	const [telephone, setTelephone] = useState('');
	const [_password, setPassword] = useState('');

	async function handleLogin() {
		const loginInfo = {
			identifier: telephone,
			password: _password,
		};

		const login = await fetch(`http://localhost:1337/auth/local`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginInfo),
		});

		const loginResponse = await login.json();

		// ! Set jwt Cookies
		setCookie(null, 'jwt', loginResponse.jwt, {
			maxAge: 30 * 24 * 60 * 60, // Three days
			path: '/',
		});

		Router.push('/');
	}

	const pushSignup = () => {
		Router.push('/signup');
	};

	const homeButton = () => {
		Router.push('/');
	};

	return (
		<div>
			<BackButton
				title="로그인"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<LoginContainer>
				<LoginInputWrapper>
					<LoginInput
						type="tel"
						placeholder="아이디 (휴대폰번호)"
						onChange={(e) => setTelephone(e.target.value)}
						value={telephone}
					/>
					<LoginInput
						type="password"
						placeholder="비밀번호"
						onChange={(e) => setPassword(e.target.value)}
						value={_password}
					/>
					<Button onClick={() => handleLogin()}>로그인</Button>
					<LinedButton onClick={pushSignup}>회원가입</LinedButton>
				</LoginInputWrapper>
				<LinkWrapper>
					<Link href="/findid">
						<CustomAnchor>아이디 찾기</CustomAnchor>
					</Link>
					<Link href="/findpw">
						<CustomAnchor>비밀번호 찾기</CustomAnchor>
					</Link>
				</LinkWrapper>
			</LoginContainer>
		</div>
	);
}

const LoginContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	text-align: center;
`;

const LoginInputWrapper = styled.div`
	margin-top: 16px;
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

const LinedButton = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 14px;
	background-color: var(--color-background);
	color: var(--color-primary);
	border: 2px solid var(--color-primary);
	font-size: 1rem;
	cursor: pointer;
`;

const LinkWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: space-evenly;
`;

const CustomAnchor = styled.a`
	font-size: 0.875rem;
	&:hover {
		cursor: pointer;
	}
`;

const LoginInput = styled.input`
	width: 100%;
	border: 1px solid var(--color-border);
	padding: 16px;
	font-size: 1rem;
	border-radius: 3px;
	margin-bottom: 16px;
	&::placeholder {
		color: var(--color-placeholder);
	}
`;
