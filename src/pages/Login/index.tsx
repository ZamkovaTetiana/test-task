import { FC } from 'react';
import { Formik, Form } from 'formik';
import CustomButton from 'shared/CustomButton';
import axios from 'core/utils/API';
import * as yup from 'yup';
import { ROUTERS, storageKey, USER } from 'core/_consts/';
import { SignInForm } from 'store/player-redux/interfaces';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginPlayer } from 'store/player-redux/playerSlice';
import { vaultService } from 'core/utils/storage';
import cn from 'classnames';
import CustomInput from 'shared/CustomInput';
import styles from './Login.module.scss';

const validationSchema = yup.object({
	username: yup.string().required(),
	password: yup.string().required(),
});

const Login: FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const initialValues = { username: '', password: '' };

	const submit = async (values: SignInForm) => {
		try {
			const response = await axios.post(USER.login, values);
			const { player } = response.data;
			vaultService.setItem(storageKey.player, player);
			vaultService.setItem(storageKey.username, values.username);
			dispatch(loginPlayer(player));
			history.push(ROUTERS.DASHBOARD);
		} catch (error) {
			toast.error(`Username or password is incorrect`);
		}
	};

	return (
		<div className={styles.Login}>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit}>
				{({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
					<Form className={styles.Login__form} onSubmit={handleSubmit}>
						<div>
							<CustomInput
								className={cn({
									Input__invalid: touched.username && errors.username,
								})}
								label={touched.username && errors.username ? 'Username is required *' : ''}
								placeholder="Username"
								name="username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								variant="outlined"
							/>
							<CustomInput
								className={cn({
									Input__invalid: touched.password && errors.password,
								})}
								label={touched.password && errors.password ? 'Password is required *' : ''}
								placeholder="Password"
								name="password"
								type="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								variant="outlined"
							/>
						</div>
						<CustomButton className={styles.Login__button} type="submit">
							Login
						</CustomButton>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
