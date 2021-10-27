import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const Toast: FC = () => (
	<ToastContainer
		position="top-right"
		autoClose={4000}
		hideProgressBar
		newestOnTop
		closeOnClick
		pauseOnFocusLoss
		pauseOnHover
	/>
);

export default Toast;
