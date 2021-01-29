import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Carousel = () => {
	return (
		<CarouselContainer>
			<Slide>
				<Image
					src="/images/carousel/artitaya.jpg"
					alt="artitaya CC"
					width={200}
					height={80}
					layout="responsive"
				/>
				<SlideNumber>1 / 3</SlideNumber>
				<NavigationPrevAnchor>
					<ArrowBackIosIcon />
				</NavigationPrevAnchor>
				<NavigationNextAnchor>
					<ArrowForwardIosIcon />
				</NavigationNextAnchor>
				<SlideText>Thailand - Artitaya CC</SlideText>
			</Slide>
		</CarouselContainer>
	);
};

const CarouselContainer = styled.div`
	width: 100%;
	position: relative;
	margin: auto;
`;

const Slide = styled.div`
	/* display: none; */
`;

const SlideNumber = styled.div`
	color: #f2f2f2;
	font-size: 12px;
	padding: 8px 12px;
	position: absolute;
	top: 0;
`;

const SlideText = styled.div`
	color: #f2f2f2;
	font-size: 15px;
	padding: 8px 12px;
	position: absolute;
	bottom: 10px;
	width: 100%;
	text-align: right;
`;

const NavigationNextAnchor = styled.a`
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	user-select: none;
	right: 0;
	border-radius: 3px 0 0 3px;
`;

const NavigationPrevAnchor = styled.a`
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	user-select: none;
	border-radius: 3px 0 0 3px;
`;

const DotContainer = styled.div`
	text-align: center;
`;

const Dot = styled.span`
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
	bottom: 0;
`;

export default Carousel;
