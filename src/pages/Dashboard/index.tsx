import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPlayer } from 'store/player-redux/playerSlice';
import Loader from 'shared/Loader/Loader';
import Categories from './Categories';
import Games from './Games';
import UserProfile from './UserProfile';
import styles from './Dashboard.module.scss';
import GameSearch from './GameSearch';

const Dashboard: FC = () => {
	const player = useSelector(selectPlayer);
	const [selectedCategoryId, setSelectedCategoryId] = useState(0);
	const [serchText, setSerchText] = useState('');

	return player ? (
		<>
			<div className={styles.Content}>
				<UserProfile />
				<GameSearch setSerchText={setSerchText} />
			</div>

			<div className={styles.Content}>
				<Games selectedCategoryId={selectedCategoryId} serchText={serchText} />
				<Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
			</div>
		</>
	) : (
		<Loader />
	);
};

export default Dashboard;
