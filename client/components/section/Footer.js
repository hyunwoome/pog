import styled from 'styled-components';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>footer</FooterWrapper>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	margin-top: 100px;
	width: 100%;
	height: 300px;
	border-top: 1px solid var(--color-border);
`;

const FooterWrapper = styled.div`
	margin: auto;
	max-width: 1024px;
`;
