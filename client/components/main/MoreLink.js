import styled from 'styled-components';
import Link from 'next/link';

export default function MoreLink({ href, text }) {
	return (
		<MoreLinkContainer>
			<Link href={href}>
				<Anchor>{text}</Anchor>
			</Link>
		</MoreLinkContainer>
	);
}

const MoreLinkContainer = styled.div`
	padding-right: 15px;
	display: flex;
	justify-content: flex-end;
`;

const Anchor = styled.a`
	font-size: 0.8rem;
	border-bottom: 1px solid black;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;
