import { FC, ReactChild } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cn from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
	onClick: () => void;
	reverce?: boolean;
	children: ReactChild;
};

const StyledButton: FC<ButtonProps> = ({ children, reverce, onClick }) => (
	<div
		onClick={onClick}
		className={cn(styles.Button, {
			[styles['Button--reverce']]: reverce,
		})}
	>
		<div>{children}</div>
		<ArrowForwardIosIcon className={styles.Button__icon} />
	</div>
);
export default StyledButton;
