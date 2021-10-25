import { ROUTERS } from 'core/_consts';
import Login from 'pages/Login';
import { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';

const App: FC = () => (
	<Switch>
		<Redirect exact path="/" to={ROUTERS.LOGIN} />
		<Route path={ROUTERS.LOGIN} component={Login} />
	</Switch>
);

export default App;
