import Logo from "$features/shared/components/Logo";
import React from "react";
import Headline from "../components/Headline";
import UndrawImg from "../components/UndrawImg";
import {
	FormWrapper,
	LoginContainer,
	LoginHeader,
	LogoWrapper,
} from "./Login.layout.styles";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LoginContainer>
			<UndrawImg />
			<FormWrapper>
				<LoginHeader>
					<LogoWrapper>
						<Logo />
					</LogoWrapper>
					<Headline />
				</LoginHeader>
				{children}
			</FormWrapper>
		</LoginContainer>
	);
};

export default LoginLayout;
