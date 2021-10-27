import { RootState } from 'store/store';
import { ICategory, IGame } from './interfaces';

export const gamesSelector = (store: RootState, gameCategory: number): Array<IGame> =>
	store.gamesRedux.games.filter(item => item.categoryIds.includes(gameCategory));

export const categoriesSelector = (store: RootState): Array<ICategory> => store.gamesRedux.categories;
