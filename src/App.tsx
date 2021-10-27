import { ROUTERS } from 'core/_consts';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from 'shared/Header';
import styles from './App.module.scss';

const App: FC = () => (
	<div>
		<Header />
		<div className={styles.App}>
			<Switch>
				<Redirect exact path="/" to={ROUTERS.LOGIN} />
				<Route path={ROUTERS.LOGIN} component={Login} />
				<Route path={ROUTERS.DASHBOARD} component={Dashboard} />
			</Switch>
		</div>
	</div>
);

export default App;
