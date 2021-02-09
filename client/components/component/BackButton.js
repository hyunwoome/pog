import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';

export default function BackButton() {
	const router = useRouter();
	return (
		<BackButtonContainer>
			<BackButtonWrapper onClick={() => router.back()}>
				<ArrowBackIcon />
			</BackButtonWrapper>
		</BackButtonContainer>
	);
}

const BackButtonContainer = styled.div`
	background-color: var(--color-background);
	padding: 14px 0 0 8px;
	position: fixed;
	width: 1024px;
`;

const BackButtonWrapper = styled.button`
	background-color: var(--color-background);
	border: none;
	cursor: pointer;
`;
