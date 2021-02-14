import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import BaseInput from '../components/component/BaseInput';
import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';

export default function Signup() {
	const router = useRouter();
	const homeButton = () => {
		router.push('/');
	};

	return (
		<div>
			<BackButton
				title="회원가입"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<SignupContainer>
				<SignupInputWrapper>
					<BaseInput type="text" placeholder="이름" />
					<BaseInput type="tel" placeholder="아이디 (핸드폰번호)" />
					<BaseInput type="password" placeholder="비밀번호" />
					<BaseInput type="password" placeholder="비밀번호 확인" />
					<Button>회원가입</Button>
				</SignupInputWrapper>
				<LinkWrapper>
					<Link href="/findid">
						<CustomAnchor>아이디 찾기</CustomAnchor>
					</Link>
					<Link href="/findpw">
						<CustomAnchor>비밀번호 찾기</CustomAnchor>
					</Link>
				</LinkWrapper>
			</SignupContainer>
		</div>
	);
}

const SignupContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 16px 32px 16px;
	text-align: center;
`;

const SignupTitleWrapper = styled.h3`
	font-weight: 400;
	margin: 0;
`;

const SignupInputWrapper = styled.div`
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

// const LinedButton = styled.button`
// 	display: block;
// 	width: 100%;
// 	border: 0;
// 	border-radius: 3px;
// 	padding: 14px;
// 	background-color: var(--color-background);
// 	color: var(--color-primary);
// 	border: 2px solid var(--color-primary);
// 	font-size: 1rem;
// 	cursor: pointer;
// `;

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
