import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import playerReducer from 'store/player-redux/playerSlice';
import gamesReducer from 'store/games-redux/gamesSlice';

export const store = configureStore({
	reducer: {
		playerRedux: playerReducer,
		gamesRedux: gamesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
