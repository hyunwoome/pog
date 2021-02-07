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
	padding: 16px 0 0 8px;
`;

const BackButtonWrapper = styled.button`
	background-color: var(--color-background);
	border: none;
	border-radius: 50%;
	cursor: pointer;
`;
