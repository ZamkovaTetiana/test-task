import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StyledButton from 'shared/Button';
import { logoutPlayer, selectPlayer } from 'store/player-redux/playerSlice';
import axios from 'core/utils/API';
import { vaultService } from 'core/utils/storage';
import { ROUTERS, storageKey, USER } from 'core/_consts';
import { FC } from 'react';
import styles from './UserProfile.module.scss';

const UserProfile: FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const player = useSelector(selectPlayer);

	const logOut = async () => {
		const userName = vaultService.getItem(storageKey.username);
		await axios.post(USER.logout, {
			username: userName,
		});
		vaultService.clearStorage();
		dispatch(logoutPlayer());
		history.push(ROUTERS.LOGIN);
	};

	return (
		<div className={styles.Container}>
			<div className={styles.Profile}>
				<img className={styles.Profile__avatar} src={player.avatar} alt="avatar" />
				<div>
					<div className={styles.Profile__name}>{player.name}</div>
					<div>{player.event}</div>
				</div>
			</div>
			<StyledButton onClick={logOut} reverce>
				Log out
			</StyledButton>
		</div>
	);
};

export default UserProfile;
