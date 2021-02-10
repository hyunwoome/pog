import styled from 'styled-components';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/">
			<a>
				<LogoText>PRIDE OF GOLF</LogoText>
			</a>
		</Link>
	);
}

const LogoText = styled.h2`
	font-family: 'Racing Sans One', cursive;
`;
