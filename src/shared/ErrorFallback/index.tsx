/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import s from './ErrorFallback.module.scss';

const ErrorFallback = () => (
	<div className={s.fallback}>
		<div className={s.fallback__content}>
			<p className={s.fallback__info}>Ooops.. Something went wrong.. Check console to see error details.</p>
		</div>
	</div>
);

export default ErrorFallback;
