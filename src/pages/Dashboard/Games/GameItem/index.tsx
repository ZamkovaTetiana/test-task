import { FC } from 'react';
import StyledButton from 'shared/Button';
import { IGame } from 'store/games-redux/interfaces';
import styles from './GameItem.module.scss';

type GameItemProps = {
	game: IGame;
	setPlayedGame: (value: string) => void;
};

const GameItem: FC<GameItemProps> = ({ game, setPlayedGame }) => (
	<>
		<div className={styles.Game}>
			<img className={styles.Game__icon} src={game.icon} alt="avatar" />
			<div>
				<div className={styles.Game__title}>{game.name}</div>
				<div className={styles.Game__description}>{game.description}</div>
				<StyledButton onClick={() => setPlayedGame(game.code)}>Play</StyledButton>
			</div>
		</div>
		<hr />
	</>
);

export default GameItem;
