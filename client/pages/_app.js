import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header/Header';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
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
	height: 100vh;
	background-color: #f3f5f9;
	margin: auto;
`;

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
			</Head>
			<GlobalStyle />
			<BaseContainer>
				<Header />
				<Component {...pageProps} />
			</BaseContainer>
		</>
	);
}

export default MyApp;
