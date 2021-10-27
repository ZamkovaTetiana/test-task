import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gamesSelector } from 'store/games-redux/gamesSelectors';
import { getGames } from 'store/games-redux/gamesAsyncActions';
import { RootState } from 'store/store';
import GameItem from './GameItem';
import GameModal from './GameModal';

type GamesProps = {
	selectedCategoryId: number;
	serchText: string;
};

const Games: FC<GamesProps> = ({ selectedCategoryId, serchText }) => {
	const dispatch = useDispatch();
	const [playedGame, setPlayedGame] = useState('');
	const games = useSelector((store: RootState) => gamesSelector(store, selectedCategoryId));

	const gameList = games.filter(item => item.name.toLowerCase().includes(serchText.toLowerCase()));

	useEffect(() => {
		dispatch(getGames());
	}, []);

	return (
		<div>
			{playedGame ? (
				<GameModal setPlayedGame={setPlayedGame} playedGame={playedGame} />
			) : (
				<>
					<h2>Games</h2>
					{gameList.length ? (
						gameList.map(game => <GameItem key={game.code} game={game} setPlayedGame={setPlayedGame} />)
					) : (
						<div>Game list is empty</div>
					)}
				</>
			)}
		</div>
	);
};

export default Games;
