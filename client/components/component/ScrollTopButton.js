import styled, { keyframes } from 'styled-components';
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
		<TopButton
			onClick={scrollTop}
			style={{ display: showScroll ? 'flex' : 'none' }}
		>
			<ArrowUpwardRoundedIcon />
		</TopButton>
	);
}

const TopButton = styled.button`
	position: fixed;
	bottom: 90px;
	right: 20px;
	align-items: center;
	justify-content: center;
	z-index: 100;
	border-radius: 10px;
	padding: 8px;
	border: 1px solid var(--color-border);
	background-color: var(--color-background);
	box-shadow: 1px 1px 3px gray;
	cursor: pointer;
	animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.5s;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
