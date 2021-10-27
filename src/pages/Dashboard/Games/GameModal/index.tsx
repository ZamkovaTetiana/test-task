import CloseIcon from '@material-ui/icons/Close';
import { FC, useEffect } from 'react';
import styles from './GameModal.module.scss';

declare global {
	interface Window {
		comeon: {
			game: {
				launch: (game: string) => void;
			};
		};
	}
}

type GameModalProps = {
	playedGame: string;
	setPlayedGame: (value: string) => void;
};

const GameModal: FC<GameModalProps> = ({ playedGame, setPlayedGame }) => {
	useEffect(() => {
		window.comeon.game.launch(playedGame);
	}, []);

	return (
		<div className={styles.GameModal}>
			<div id="game-launch" />
			<CloseIcon className={styles.GameModal__closeIcon} onClick={() => setPlayedGame('')} />
		</div>
	);
};

export default GameModal;
