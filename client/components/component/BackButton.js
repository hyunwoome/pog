import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';

export default function BackButton({ title, icon, color, buttonHandle }) {
	const ICON = icon;
	const menuButtonHandle = buttonHandle;
	const router = useRouter();
	return (
		<BackButtonFixedContainer>
			<BackButtonContainer>
				<BackButtonNavContainer>
					<BackButtonWrapper>
						<BackIconButton onClick={() => router.back()}>
							<ArrowBackIcon />
						</BackIconButton>
					</BackButtonWrapper>
					<BackButtonTitleWrapper>{title}</BackButtonTitleWrapper>
					<BackButtonMenuWrapper>
						<BackButtonMenuButton onClick={menuButtonHandle}>
							<ICON style={{ color: color }} />
						</BackButtonMenuButton>
					</BackButtonMenuWrapper>
				</BackButtonNavContainer>
			</BackButtonContainer>
		</BackButtonFixedContainer>
	);
}

const BackButtonFixedContainer = styled.div`
	background-color: var(--color-background);
	position: fixed;
	width: 100%;
	left: 0;
`;

const BackButtonContainer = styled.div`
	display: flex;
	height: 52px;
	padding: 0 16px;
`;

const BackButtonNavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1024px;
	margin: auto;
`;

const BackButtonWrapper = styled.div`
	flex: 1;
`;

const BackButtonMenuButton = styled.button`
	border: none;
	background-color: var(--color-background);
	cursor: pointer;
`;

const BackIconButton = styled.button`
	background-color: var(--color-background);
	border: none;
	cursor: pointer;
`;

const BackButtonTitleWrapper = styled.div`
	flex: 1;
	text-align: center;
	font-size: 1.125rem;
`;

const BackButtonMenuWrapper = styled.div`
	flex: 1;
	text-align: right;
`;
