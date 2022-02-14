import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import auth from '$features/shared/firebase/auth';
import { GoogleIcon, GoogleLoginButton } from './LoginForm.styles';

function LoginForm() {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const navigate = useNavigate();

	const login = async (e: FormEvent) => {
		e.preventDefault();
		await signInWithGoogle();
	};

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user]);

	return (
		<form onSubmit={login}>
			<GoogleLoginButton>
				<GoogleIcon>
					<FcGoogle />
				</GoogleIcon>
				<p>Zaloguj się z Google</p>
			</GoogleLoginButton>
		</form>
	);
}

export default LoginForm;
