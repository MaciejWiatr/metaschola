import { HomeContainer, HomePageLayout } from "./Home.layout.styles";

interface IProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: IProps) => {
	return (
		<HomePageLayout>
			<HomeContainer>{children}</HomeContainer>
		</HomePageLayout>
	);
};

export default HomeLayout;
