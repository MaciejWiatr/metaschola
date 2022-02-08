import { GoogleIcon, GoogleLoginButton } from "./LoginForm.styles";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "$features/shared/firebase/auth";
import { FormEvent } from "react";

const LoginForm = () => {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const navigate = useNavigate();

	const login = (e: FormEvent) => {
		e.preventDefault();
		signInWithGoogle().then(() => {
			if (user) {
				navigate("/");
			}
		});
	};

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
};

export default LoginForm;
