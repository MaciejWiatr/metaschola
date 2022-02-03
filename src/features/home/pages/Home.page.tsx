import AdditionalInfo from "../components/AdditionalInfo";
import Aside from "../components/Aside";
import Main from "../components/Main";
import HomeLayout from "../layouts/Home.layout";

const HomePage = () => {
	return (
		<HomeLayout>
			<Aside />
			<Main />
			<AdditionalInfo />
		</HomeLayout>
	);
};

export default HomePage;
