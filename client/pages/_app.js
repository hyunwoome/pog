import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
			<Component {...pageProps} />;
		</div>
	);
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  html,
  body {
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
