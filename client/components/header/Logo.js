import styled from 'styled-components';
import Link from 'next/link';

const Logo = () => {
	return (
		<div>
			<Link href="/">
				<a>
					<LogoText>Pride Of Golf</LogoText>
				</a>
			</Link>
		</div>
	);
};

const LogoText = styled.h1`
	margin-left: 20px;
	font-size: 1.3rem;
	font-family: 'Poppins', sans-serif;
	&:hover {
		opacity: 0.5;
	}
`;

export default Logo;
