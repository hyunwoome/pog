import styled from 'styled-components';
import BackButton from '../components/component/BackButton';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import { useRouter } from 'next/router';

export default function Custom404() {
	const router = useRouter();

	const handleClick = () => {
		router.push('/');
	};

	return (
		<div>
			<Custom404Container>
				<BackButton />
				<Custom404Wrapper>
					<ErrorOutlineRoundedIcon color="error" fontSize="large" />
					<Custom404Title>페이지를 찾을 수 없습니다.</Custom404Title>
					<Custom404Text>
						요청하신 페이지의 주소가 잘못 입력되었거나,
						<br />
						페이지의 주소가 변경 혹은 삭제되어
						<br />
						요청하신 페이지를 찾을 수 없습니다.
					</Custom404Text>
					<Button onClick={handleClick}>홈으로 이동하기</Button>
				</Custom404Wrapper>
			</Custom404Container>
		</div>
	);
}

const Custom404Container = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
`;

const Custom404Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 64px 16px 16px 16px;
`;

const Custom404Title = styled.h3`
	font-weight: 400;
`;

const Custom404Text = styled.span`
	color: gray;
	font-size: 0.938rem;
`;

const Button = styled.button`
	display: block;
	width: 100%;
	border: 0;
	border-radius: 3px;
	padding: 12px;
	background-color: var(--color-primary);
	color: var(--color-background);
	font-size: 1rem;
	margin-top: 32px;
	cursor: pointer;
`;
