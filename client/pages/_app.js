import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/section/Header';
import BottomNavigation from '../components/section/BottomNavigation';
import ScrollTopButton from '../components/component/ScrollTopButton';

export default function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Pride of Golf</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<BaseContainer>
				<Header />
				<ScrollTopButton />
				<Component {...pageProps} />
				<BottomNavigation />
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
	--color-primary: #9ccc65;
	--color-primary-dark: #8bc34a;
	--color-secondary: #ff8a65;
	--color-font: #000000;
	--color-border: #e0e0e0;

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
	height: 3000px;
	margin: auto;
`;
