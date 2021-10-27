/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { vaultService } from 'core/utils/storage';
import { storageKey } from 'core/_consts';
import { RootState } from 'store/store';
import { IPlayer } from './interfaces';

interface PlayerState {
	player: {
		name: string;
		avatar: string;
		event: string;
	};
}

const initialState: PlayerState = {
	player: vaultService.getItem(storageKey.player) || {
		name: '',
		avatar: '',
		event: '',
	},
};

export const selectPlayer = (store: RootState): IPlayer => store.playerRedux.player;

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		loginPlayer: (state, action: PayloadAction<IPlayer>) => {
			state.player = action.payload;
		},
		logoutPlayer: state => {
			state.player = initialState.player;
		},
	},
});

export const { loginPlayer, logoutPlayer } = playerSlice.actions;

export default playerSlice.reducer;
