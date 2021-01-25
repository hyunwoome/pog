import styles from './Main.module.css';
import Image from 'next/image';

const Main = () => {
	return (
		<div className={styles.mainContainer}>
			<Image
				src="/images/main/main1.jpg"
				width={1024}
				height={600}
				layout="responsive"
			/>
		</div>
	);
};

export default Main;
