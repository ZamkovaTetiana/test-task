import { FC } from 'react';
import CustomInput from 'shared/CustomInput';

type GameSearchType = {
	setSerchText: (value: string) => void;
};

const GameSearch: FC<GameSearchType> = ({ setSerchText }) => (
	<CustomInput label="Search" onChange={e => setSerchText(e.target.value)} />
);

export default GameSearch;
