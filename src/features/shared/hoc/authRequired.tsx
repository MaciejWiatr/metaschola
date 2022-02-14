import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { fireAuth } from '..';

const authRequired = (WrappedComponent: any) => function(props: any) {
	const [user, loading] = useAuthState(fireAuth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) return;
		if (!user) {
			navigate('/login');
		}
	}, [loading, user]);

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <WrappedComponent {...props} />;
};

export default authRequired;
