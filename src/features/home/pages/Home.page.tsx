import Main from "../components/Main";
import { BaseLayout } from "$features/shared";
import { authRequired } from "$features/shared";

const HomePage = () => {
	return (
		<BaseLayout>
			<Main />
		</BaseLayout>
	);
};

export default authRequired(HomePage);
