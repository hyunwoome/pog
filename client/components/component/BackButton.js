import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';

export default function BackButton({ title, icon, text, color, buttonHandle }) {
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

					{title ? (
						<BackButtonTitleWrapper>{title}</BackButtonTitleWrapper>
					) : (
						<BackButtonTitleWrapper></BackButtonTitleWrapper>
					)}
					{ICON ? (
						<BackButtonMenuWrapper>
							<BackButtonMenuButton onClick={menuButtonHandle}>
								<ICON style={{ color: color }} />
							</BackButtonMenuButton>
						</BackButtonMenuWrapper>
					) : (
						<BackButtonMenuWrapper></BackButtonMenuWrapper>
					)}
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
	display: flex;
	align-items: center;
	justify-content: flex-end;
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
	display: flex;
	justify-content: flex-end;
`;
