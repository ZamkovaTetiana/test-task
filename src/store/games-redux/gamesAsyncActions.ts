/* eslint-disable consistent-return */
import axios from 'core/utils/API';
import { GAME } from 'core/_consts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getGames = createAsyncThunk('gamesRedux/getGames', async () => {
	const response = await axios.get(GAME.getGames);
	return response.data;
});

export const getCategories = createAsyncThunk('gamesRedux/getCategories', async () => {
	const response = await axios.get(GAME.categories);
	return response.data;
});
