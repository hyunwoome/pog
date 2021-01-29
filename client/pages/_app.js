import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<GlobalStyle />
			<BaseContainer>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</BaseContainer>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
		overflow: auto;
		background-color: #f5f5f5
  }
  a {
    color: inherit;
    text-decoration: none; 
  }
  * {
    box-sizing: border-box;
  }
`;

const BaseContainer = styled.section`
	max-width: 1024px;
	background-color: #f3f5f9;
	margin: auto;
	font-family: 'Noto Sans KR', sans-serif;
`;

export default MyApp;
