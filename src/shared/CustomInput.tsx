import { withStyles, TextField } from '@material-ui/core';

const CustomInput = withStyles({
	root: {
		margin: '20px 10px',
		'& .MuiOutlinedInput-root': {
			color: 'black',
			fontWeight: '300',
			fontSize: '18px',
			borderRadius: '7px',
			border: 'none',
			'& fieldset': {
				border: '1px solid #c4ccd3',
				transition: 'all 0.3s',
			},
			'& legend': {
				width: 0,
			},
			'&:hover fieldset': {
				border: '1px solid #c4ccd3',
			},
			'&.Mui-focused': {
				'& fieldset': {
					border: '1px solid #c4ccd3',
				},
			},
		},
		'& .MuiInputLabel-formControl': {
			transform: 'none',
		},

		'&.Input__invalid': {
			'& .MuiInputLabel-formControl': {
				top: '-25px',
				left: '10px',
				color: 'red',
			},
			'& .MuiOutlinedInput-root fieldset': {
				borderColor: 'red',
			},
		},
	},
})(TextField);

export default CustomInput;
