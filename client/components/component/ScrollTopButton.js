import styled, { keyframes, css } from 'styled-components';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import { useState, useEffect } from 'react';

export default function ScrollTopButton() {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);
	}, [showScroll, checkScrollTop]);

	return (
		<Fade out={showScroll}>
			<TopButton onClick={scrollTop}>
				<ArrowUpwardRoundedIcon color="action" />
			</TopButton>
		</Fade>
	);
}

const TopButton = styled.button`
	position: fixed;
	bottom: 90px;
	right: 20px;
	align-items: center;
	justify-content: center;
	z-index: 100;
	border-radius: 50%;
	padding: 8px;
	display: flex;
	border: 1px solid var(--color-border);
	background-color: var(--color-background);
	box-shadow: 1px 1px 3px gray;
	cursor: pointer;
`;

const Fade = styled.div`
	visibility: ${(props) => (props.out ? 'visible' : 'hidden')};
	animation: ${(props) => (props.out ? fadeIn : fadeOut)} 0.5s;
	transition: 0.5s;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;
