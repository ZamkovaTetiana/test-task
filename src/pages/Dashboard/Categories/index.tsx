import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/games-redux/gamesAsyncActions';
import { categoriesSelector } from 'store/games-redux/gamesSelectors';
import cn from 'classnames';
import styles from './Categories.module.scss';

type CategoriesProps = {
	setSelectedCategoryId: (value: number) => void;
	selectedCategoryId: number;
};

const Categories: FC<CategoriesProps> = ({ setSelectedCategoryId, selectedCategoryId }) => {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return (
		<div className={styles.Categories}>
			<h2>Categories</h2>
			{categories.map(category => (
				<div
					className={cn(styles.Categories__item, {
						[styles['Categories__item--selected']]: category.id === selectedCategoryId,
					})}
					onClick={() => setSelectedCategoryId(category.id)}
				>
					{category.name}
				</div>
			))}
		</div>
	);
};

export default Categories;
