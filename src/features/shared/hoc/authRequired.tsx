import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { fireAuth } from '..';

const authRequired = (WrappedComponent: any) =>
	// eslint-disable-next-line func-names
	function (props: unknown) {
		const [user, loading] = useAuthState(fireAuth);
		const navigate = useNavigate();

		useEffect(() => {
			if (loading) return;
			if (!user) {
				navigate('/login');
			}
		}, [loading, user, navigate]);

		return <WrappedComponent {...props} />;
	};

export default authRequired;
