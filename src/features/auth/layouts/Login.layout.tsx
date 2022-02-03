import React from "react";
import Headline from "../components/Headline";
import { LoginContainer } from "./Login.layout.styles";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LoginContainer>
			<Headline />
			{children}
		</LoginContainer>
	);
};

export default LoginLayout;
