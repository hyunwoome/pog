import styled from 'styled-components';
import MenuList from './MenuList';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useRef, useState, useEffect } from 'react';

export default function Menu() {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	function useOnClickOutside(ref, handler) {
		useEffect(() => {
			const listener = (event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
			};
		}, [ref, handler]);
	}

	return (
		<div ref={node}>
			<Button onClick={() => setOpen(!open)}>
				<MenuRoundedIcon />
			</Button>
			<MenuList open={open} setOpen={setOpen} />
		</div>
	);
}

const Button = styled.button`
	border: 0;
	margin-top: 3px;
	background-color: #edf1f7;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;
