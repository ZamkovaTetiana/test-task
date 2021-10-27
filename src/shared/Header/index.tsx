import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Header.module.scss';

const Header: FC = () => (
	<div className={styles.Header}>
		<Logo />
	</div>
);

export default Header;
