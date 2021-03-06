import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import ScrollTopButton from '../components/component/ScrollTopButton';
import BottomNavigation from '../components/section/BottomNavigation';
import Footer from '../components/section/Footer';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Pride Of Golf</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<BaseContainer>
				<Component {...pageProps} />
				<ScrollTopButton />
				<BottomNavigation />
				<Footer />
			</BaseContainer>
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
	background-color: var(--color-subBackground);
	font-family: 'Noto Sans KR', sans-serif;
	

	/* Color Variable */

	--color-background: #ffffff;
	--color-subBackground: #f3f5f9;
	--color-primary: #ff577f;
	--color-key: #fbd757;
	--color-font: #292927;
	--color-subFont: #919191;
	--color-border: #e0e0e0;
	--color-placeholder: #bebebe;

	/* Font Variable */

	--font-caption: 0.75rem;
	
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
`;

const BaseContainer = styled.div`
	max-width: 1024px;
	margin: auto;
`;
