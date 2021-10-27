import { withStyles, Button } from '@material-ui/core';

const CustomButton = withStyles({
	root: {
		padding: '10px 20px',
		color: '#333',
		borderRadius: '5px',
		border: '1px solid #d9d9d9',
		'&:hover': {
			backgroundColor: '#d9d9d9',
		},
	},
})(Button);

export default CustomButton;
