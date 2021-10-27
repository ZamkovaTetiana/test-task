import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'shared/ErrorFallback';
import Toast from 'shared/Toast';
import App from './App';
import './index.scss';

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ErrorBoundary fallbackRender={ErrorFallback}>
					<App />
					<Toast />
				</ErrorBoundary>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
);
