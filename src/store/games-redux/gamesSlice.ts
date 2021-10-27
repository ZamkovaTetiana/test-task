/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories, getGames } from './gamesAsyncActions';
import { ICategory, IGame } from './interfaces';

interface IGamesState {
	games: Array<IGame>;
	categories: Array<ICategory>;
}

const initialState: IGamesState = {
	games: [],
	categories: [],
};

export const gamesSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getGames.fulfilled, (state, action: PayloadAction<Array<IGame>>) => {
				state.games = action.payload;
			})
			.addCase(getCategories.fulfilled, (state, action: PayloadAction<Array<ICategory>>) => {
				state.categories = action.payload;
			});
	},
});

export default gamesSlice.reducer;
